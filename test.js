#!/usr/bin/env node

import { spawn } from 'child_process';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

/**
 * Go-style test runner for TypeScript
 *
 * Usage:
 *   node test.js                    # Run all tests
 *   node test.js -v                 # Verbose output
 *   node test.js src/frontend/      # Run tests in specific directory
 */

const args = process.argv.slice(2);
const isVerbose = args.includes('-v');
const testDir = args.find(arg => !arg.startsWith('-')) || 'src';

// ANSI color codes
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function findTestFiles(dir) {
  const testFiles = [];

  function walkDir(currentDir) {
    try {
      const files = readdirSync(currentDir);

      for (const file of files) {
        const fullPath = join(currentDir, file);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (file.endsWith('.test.ts')) {
          testFiles.push(fullPath);
        }
      }
    } catch (err) {
      // Directory doesn't exist or can't be read
    }
  }

  walkDir(dir);
  return testFiles;
}

function formatDuration(ms) {
  if (ms < 1000) {
    return `${ms.toFixed(1)}ms`;
  } else {
    return `${(ms / 1000).toFixed(2)}s`;
  }
}

async function runTests() {
  console.log(`${colors.bold}🧪 Wukkie.uk Test Runner${colors.reset}`);
  console.log(`${colors.cyan}Searching for tests in: ${testDir}${colors.reset}\n`);

  const testFiles = findTestFiles(testDir);

  if (testFiles.length === 0) {
    console.log(`${colors.yellow}No test files found${colors.reset}`);
    return;
  }

  console.log(`${colors.blue}Found ${testFiles.length} test file(s):${colors.reset}`);
  testFiles.forEach(file => console.log(`  ${file}`));
  console.log();

  const startTime = Date.now();
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  for (const testFile of testFiles) {
    console.log(`${colors.bold}=== RUN   ${testFile}${colors.reset}`);

    const testStartTime = Date.now();

    try {
      const result = await runNodeTest(testFile);
      const duration = Date.now() - testStartTime;

      if (result.success) {
        console.log(`${colors.green}--- PASS: ${testFile} (${formatDuration(duration)})${colors.reset}`);
        passedTests += result.testCount;
      } else {
        console.log(`${colors.red}--- FAIL: ${testFile} (${formatDuration(duration)})${colors.reset}`);
        if (result.error) {
          console.log(`${colors.red}${result.error}${colors.reset}`);
        }
        failedTests += result.testCount;
      }

      totalTests += result.testCount;

    } catch (error) {
      const duration = Date.now() - testStartTime;
      console.log(`${colors.red}--- FAIL: ${testFile} (${formatDuration(duration)})${colors.reset}`);
      console.log(`${colors.red}${error.message}${colors.reset}`);
      failedTests++;
      totalTests++;
    }

    console.log();
  }

  const totalDuration = Date.now() - startTime;

  // Print summary (Go style)
  if (failedTests > 0) {
    console.log(`${colors.red}${colors.bold}FAIL${colors.reset}`);
    console.log(`${colors.red}FAIL\t${testDir}\t${formatDuration(totalDuration)}${colors.reset}`);
  } else {
    console.log(`${colors.green}${colors.bold}PASS${colors.reset}`);
    console.log(`${colors.green}ok  \t${testDir}\t${formatDuration(totalDuration)}${colors.reset}`);
  }

  console.log(`\nTests run: ${totalTests}`);
  console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`);
  if (failedTests > 0) {
    console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`);
  }
  console.log(`Duration: ${formatDuration(totalDuration)}`);

  // Exit with appropriate code (Go style)
  process.exit(failedTests > 0 ? 1 : 0);
}

function runNodeTest(testFile) {
  return new Promise((resolve) => {
    const child = spawn('node', [
      '--test',
      '--experimental-strip-types',
      testFile
    ], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';
    let testCount = 0;

    child.stdout.on('data', (data) => {
      const output = data.toString();
      stdout += output;

      if (isVerbose) {
        process.stdout.write(output);
      }

      // Count tests (rough estimation)
      const testMatches = output.match(/✓|✗|test\(/g);
      if (testMatches) {
        testCount += testMatches.length;
      }
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      // Try to extract actual test count from Node.js test runner output
      const testCountMatch = stdout.match(/# tests (\d+)/);
      if (testCountMatch) {
        testCount = parseInt(testCountMatch[1]);
      } else if (testCount === 0) {
        // Fallback: count describe/test blocks
        const describeMatches = stdout.match(/describe\('.*?'/g);
        const testMatches = stdout.match(/test\('.*?'/g);
        testCount = (describeMatches?.length || 0) + (testMatches?.length || 0);
        if (testCount === 0) testCount = 1; // At least one test assumed
      }

      resolve({
        success: code === 0,
        testCount: Math.max(testCount, 1),
        error: code !== 0 ? stderr || stdout : null
      });
    });

    child.on('error', (error) => {
      resolve({
        success: false,
        testCount: 1,
        error: error.message
      });
    });
  });
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log(`\n${colors.yellow}Test run interrupted${colors.reset}`);
  process.exit(130);
});

// Run the tests
runTests().catch(error => {
  console.error(`${colors.red}Test runner error: ${error.message}${colors.reset}`);
  process.exit(1);
});
