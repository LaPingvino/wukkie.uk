#!/usr/bin/env node

/**
 * Wukkie.uk Development Setup Verification
 *
 * This script verifies that your development environment is properly configured
 * for contributing to the privacy-first location system.
 *
 * Usage: node verify-setup.js
 */

import { spawn } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

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

console.log(`${colors.bold}🧪 Wukkie.uk Development Setup Verification${colors.reset}\n`);

let allPassed = true;

function checkPassed(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

function checkFailed(message, details = '') {
  console.log(`${colors.red}❌ ${message}${colors.reset}`);
  if (details) {
    console.log(`${colors.red}   ${details}${colors.reset}`);
  }
  allPassed = false;
}

function checkWarning(message, details = '') {
  console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
  if (details) {
    console.log(`${colors.yellow}   ${details}${colors.reset}`);
  }
}

function checkInfo(message) {
  console.log(`${colors.blue}ℹ️  ${message}${colors.reset}`);
}

// Check 1: Node.js version
function checkNodeVersion() {
  const version = process.version;
  const majorVersion = parseInt(version.slice(1).split('.')[0]);

  if (majorVersion >= 18) {
    checkPassed(`Node.js version ${version} (>= 18 required)`);
  } else {
    checkFailed(`Node.js version ${version} is too old`, 'Please install Node.js 18 or later');
  }
}

// Check 2: Package.json exists
function checkPackageJson() {
  if (existsSync('package.json')) {
    checkPassed('package.json found');
    try {
      const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
      if (pkg.name && pkg.name.includes('wukkie')) {
        checkPassed('Package name indicates Wukkie.uk project');
      } else {
        checkWarning('Package name doesn\'t match expected pattern');
      }
    } catch (e) {
      checkFailed('package.json is malformed', e.message);
    }
  } else {
    checkFailed('package.json not found', 'Run this script from the project root directory');
  }
}

// Check 3: Required files exist
function checkRequiredFiles() {
  const requiredFiles = [
    'test.js',
    'src/frontend/location-privacy.ts',
    'src/frontend/location-privacy.test.ts',
    'src/frontend/issue-management.test.ts',
    'src/frontend/multiple-locations.test.ts',
    'TESTING.md'
  ];

  let missingFiles = [];
  for (const file of requiredFiles) {
    if (existsSync(file)) {
      checkPassed(`Required file found: ${file}`);
    } else {
      checkFailed(`Missing required file: ${file}`);
      missingFiles.push(file);
    }
  }

  if (missingFiles.length === 0) {
    checkPassed('All required files present');
  }
}

// Check 4: Dependencies installed
function checkNodeModules() {
  if (existsSync('node_modules')) {
    checkPassed('node_modules directory exists');

    // Check for specific dependencies we need
    const criticalDeps = [
      'node_modules/pluscodes',
      'node_modules/@types/node'
    ];

    let missingDeps = [];
    for (const dep of criticalDeps) {
      if (existsSync(dep)) {
        checkPassed(`Critical dependency found: ${dep.replace('node_modules/', '')}`);
      } else {
        checkWarning(`Dependency might be missing: ${dep.replace('node_modules/', '')}`);
        missingDeps.push(dep);
      }
    }

    if (missingDeps.length > 0) {
      checkInfo('If tests fail, try: npm install');
    }
  } else {
    checkFailed('node_modules directory not found', 'Run: npm install');
  }
}

// Check 5: Test runner functionality
async function checkTestRunner() {
  return new Promise((resolve) => {
    console.log(`${colors.cyan}🔍 Testing the test runner...${colors.reset}`);

    const child = spawn('node', ['test.js'], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      if (code === 0) {
        // Parse output to get test counts
        const testRunMatch = stdout.match(/Tests run: (\d+)/);
        const passedMatch = stdout.match(/Passed: (\d+)/);
        const failedMatch = stdout.match(/Failed: (\d+)/);

        if (testRunMatch && passedMatch && failedMatch) {
          const testCount = parseInt(testRunMatch[1]);
          const passedCount = parseInt(passedMatch[1]);
          const failedCount = parseInt(failedMatch[1]);

          if (testCount === 58 && passedCount === 58 && failedCount === 0) {
            checkPassed(`All ${testCount} tests pass (${passedCount} passed, ${failedCount} failed)`);
            checkPassed('Test runner working correctly');
          } else if (failedCount === 0) {
            checkPassed(`All ${passedCount} tests pass`);
            if (testCount !== 58) {
              checkWarning(`Expected 58 tests, found ${testCount}`, 'Test count may have changed');
            }
          } else {
            checkFailed(`${failedCount} tests failing out of ${testCount}`, 'Fix failing tests before development');
          }
        } else {
          checkPassed('Tests completed successfully');
          checkWarning('Could not parse test count from output', 'Test runner format may have changed');
        }
      } else {
        checkFailed('Test runner failed to execute', stderr || 'Unknown error');
        if (stderr.includes('Cannot find module')) {
          checkInfo('Try running: npm install');
        }
      }
      resolve();
    });

    child.on('error', (error) => {
      checkFailed('Failed to run test runner', error.message);
      resolve();
    });
  });
}

// Check 6: TypeScript configuration
function checkTypeScript() {
  if (existsSync('tsconfig.json')) {
    checkPassed('TypeScript configuration found');
    try {
      const tsconfig = JSON.parse(readFileSync('tsconfig.json', 'utf8'));
      if (tsconfig.compilerOptions) {
        checkPassed('TypeScript compiler options configured');
      }
    } catch (e) {
      checkWarning('tsconfig.json exists but may be malformed');
    }
  } else {
    checkWarning('tsconfig.json not found', 'TypeScript configuration recommended');
  }
}

// Check 7: Documentation files
function checkDocumentation() {
  const docFiles = [
    { file: 'README.md', desc: 'Project README' },
    { file: 'TESTING.md', desc: 'Testing documentation' },
    { file: 'GETTING_STARTED.md', desc: 'Getting started guide' },
    { file: 'DESIGN.md', desc: 'Design documentation' }
  ];

  let foundDocs = 0;
  for (const { file, desc } of docFiles) {
    if (existsSync(file)) {
      checkPassed(`${desc} found: ${file}`);
      foundDocs++;
    } else {
      checkWarning(`${desc} missing: ${file}`);
    }
  }

  if (foundDocs === docFiles.length) {
    checkPassed('All documentation files present');
  }
}

// Main execution
async function runVerification() {
  console.log(`${colors.bold}Checking development environment...${colors.reset}\n`);

  checkNodeVersion();
  console.log();

  checkPackageJson();
  console.log();

  checkRequiredFiles();
  console.log();

  checkNodeModules();
  console.log();

  checkTypeScript();
  console.log();

  checkDocumentation();
  console.log();

  // Run test runner check last as it takes time
  await checkTestRunner();
  console.log();

  // Final summary
  console.log(`${colors.bold}🎯 Verification Summary${colors.reset}`);
  console.log('─'.repeat(50));

  if (allPassed) {
    console.log(`${colors.green}${colors.bold}✅ All checks passed! You're ready to develop.${colors.reset}\n`);

    console.log(`${colors.blue}Next steps:${colors.reset}`);
    console.log('1. Read TESTING.md for testing guidelines');
    console.log('2. Run "npm run dev" to start development server');
    console.log('3. Always run "node test.js" before committing');
    console.log('4. Add tests for any new functionality\n');

    console.log(`${colors.cyan}Happy coding! 🚂✨${colors.reset}`);
  } else {
    console.log(`${colors.red}${colors.bold}❌ Some checks failed. Please fix the issues above.${colors.reset}\n`);

    console.log(`${colors.blue}Common solutions:${colors.reset}`);
    console.log('- Run "npm install" to install dependencies');
    console.log('- Make sure you\'re in the project root directory');
    console.log('- Check Node.js version with "node --version"');
    console.log('- Read GETTING_STARTED.md for setup instructions\n');

    process.exit(1);
  }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log(`\n${colors.yellow}Verification interrupted${colors.reset}`);
  process.exit(130);
});

// Run the verification
runVerification().catch(error => {
  console.error(`${colors.red}Verification error: ${error.message}${colors.reset}`);
  process.exit(1);
});
