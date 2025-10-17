# Testing Guide for Wukkie.uk

## Overview

Wukkie.uk uses a comprehensive testing approach to ensure reliability, privacy, and correctness of location-based functionality. All code changes **MUST** include tests and pass the full test suite before being committed.

## 🚨 Testing Requirements

### Before Any Commit
1. **Run the full test suite**: `node test.js`
2. **All tests MUST pass** (58/58 ✅)
3. **Add tests for new functionality**
4. **Update tests when modifying existing features**
5. **Test edge cases and error conditions**

### Test Coverage Areas
- **Location Privacy System**: Geo hashtag validation, Plus Code handling
- **Issue Management**: CRUD operations, location integration
- **Multiple Locations**: Multi-location functionality and parsing
- **Case Sensitivity**: Comprehensive case-insensitive support
- **Edge Cases**: Malformed input, invalid characters, boundary conditions

## 📁 Test Structure

```
src/frontend/
├── location-privacy.test.ts     # Core location privacy (29 tests)
├── issue-management.test.ts     # Issue management integration (14 tests)
├── multiple-locations.test.ts   # Multiple location handling (15 tests)
├── location-privacy.ts          # Implementation
└── ...
test.js                          # Go-style test runner
```

## 🚀 Running Tests

### Run All Tests
```bash
node test.js                     # Run all tests
node test.js -v                 # Verbose output
```

### Run Specific Test Files
```bash
node test.js src/frontend/       # Run tests in directory
node --test --experimental-strip-types src/frontend/location-privacy.test.ts
```

### Expected Output
```
🧪 Wukkie.uk Test Runner
Searching for tests in: src

Found 3 test file(s):
  src/frontend/issue-management.test.ts
  src/frontend/location-privacy.test.ts
  src/frontend/multiple-locations.test.ts

=== RUN   src/frontend/issue-management.test.ts
--- PASS: src/frontend/issue-management.test.ts (284.0ms)

=== RUN   src/frontend/location-privacy.test.ts
--- PASS: src/frontend/location-privacy.test.ts (336.0ms)

=== RUN   src/frontend/multiple-locations.test.ts
--- PASS: src/frontend/multiple-locations.test.ts (273.0ms)

PASS
ok      src     894.0ms

Tests run: 58
Passed: 58
Duration: 894.0ms
```

## ✍️ Writing Tests

### Test Naming Convention
Use descriptive Go-style test names:
```typescript
test("TestCreatePrivacyLocation_ValidCoordinates", () => {
  // Test implementation
});

test("TestGeoHashtagValidation_CaseInsensitive", () => {
  // Test implementation  
});
```

### Test Structure
```typescript
import { test, describe } from "node:test";
import assert from "node:assert";
import { functionToTest } from "./module-to-test.ts";

describe("ModuleName", () => {
  test("TestFunctionName_Scenario", () => {
    // Arrange
    const input = "test data";
    const expected = "expected result";
    
    // Act
    const result = functionToTest(input);
    
    // Assert
    assert.strictEqual(result, expected, "descriptive error message");
  });
});
```

### Plus Code Character Requirements
**IMPORTANT**: Only use valid Plus Code characters in tests:
- ✅ Valid: `23456789CFGHJMPQRVWX` (case insensitive)
- ❌ Invalid: `ABDEILNOSTUZ` (excluded to avoid confusion)

```typescript
// ✅ Good - valid Plus Code characters
const validHashtags = [
  "#geo9c3xgp",
  "#geocfghjm", 
  "#geoqrvwx2"
];

// ❌ Bad - invalid characters (a, b, d, e not allowed)
const invalidHashtags = [
  "#geoabcdef", // contains a, b, d, e
  "#geodef123"  // contains d, e
];
```

## 📋 Test Categories

### 1. Location Privacy Tests (`location-privacy.test.ts`)
- **Core functionality**: Creating privacy locations, parsing geo hashtags
- **Case sensitivity**: Comprehensive case-insensitive support
- **Validation**: Plus Code character validation, hashtag format
- **Parsing**: Roundtrip testing, coordinate precision
- **Edge cases**: Invalid input, boundary conditions
- **Performance**: Stress testing with 100+ locations

### 2. Issue Management Tests (`issue-management.test.ts`)
- **CRUD operations**: Create, read, update issue data
- **Location integration**: Single and multiple location handling  
- **Form validation**: Required fields, data types
- **Display logic**: Location formatting, filtering
- **Hashtag management**: Geo vs regular hashtag separation

### 3. Multiple Locations Tests (`multiple-locations.test.ts`)
- **Parsing**: Space-separated geo hashtag input
- **Validation**: Multiple location validation
- **Integration**: Form submission with multiple locations
- **Display**: Location count, bounding box calculation
- **Edge cases**: Empty input, invalid combinations

## 🎯 Test-Driven Development Workflow

### For New Features
1. **Write failing test first** (Red)
2. **Implement minimum code to pass** (Green)  
3. **Refactor and optimize** (Refactor)
4. **Add edge case tests**
5. **Run full test suite**

### For Bug Fixes
1. **Write test that reproduces bug**
2. **Confirm test fails**
3. **Fix the bug**
4. **Confirm test passes**
5. **Run full test suite**

### For Refactoring
1. **Run tests before changes** (ensure green)
2. **Make incremental changes**
3. **Run tests after each change**
4. **Maintain 100% pass rate**

## 🔍 Testing Best Practices

### Location Privacy Specific
- **Always test case insensitivity**: `#geo9c3xgp`, `#GEO9C3XGP`, `#Geo9C3XGP`
- **Test precision boundaries**: ~1km accuracy for 6-char Plus Codes
- **Validate Plus Code constraints**: Only valid characters allowed
- **Test geographical edge cases**: Poles, date line, equator
- **Test malformed input**: `##geo`, `#geo#123`, invalid characters

### General Guidelines
- **Use descriptive test names**: Clearly indicate what's being tested
- **Test one thing at a time**: Focused, atomic tests
- **Use meaningful assertions**: Include descriptive error messages
- **Test both happy path and edge cases**: Success and failure scenarios
- **Mock external dependencies**: GPS, network calls, etc.
- **Use consistent test data**: Valid Plus Code characters only

### Assertion Examples
```typescript
// ✅ Good - descriptive message
assert.strictEqual(result.length, 3, "should find 3 geo hashtags");
assert.ok(isValidGeoHashtag("#GEO9C3XGP"), "#GEO9C3XGP should be valid regardless of case");

// ❌ Bad - no context
assert.strictEqual(result.length, 3);
assert.ok(isValidGeoHashtag("#GEO9C3XGP"));
```

## 🚨 Debugging Failed Tests

### Common Issues
1. **Invalid Plus Code characters**: Use only `23456789CFGHJMPQRVWX`
2. **Case sensitivity assumptions**: Test all case combinations
3. **Precision expectations**: Plus Codes have ~1km precision, not exact
4. **Regex patterns**: Ensure case-insensitive matching with `/gi` flag

### Debug Steps
1. **Run single test**: `node --test file.test.ts`
2. **Check test data**: Verify Plus Code character validity
3. **Add debug logging**: `console.log()` in tests/implementation
4. **Verify expectations**: Are test assumptions correct?

## 📊 Test Metrics

### Current Status
- **Total tests**: 58
- **Pass rate**: 100% (58/58 ✅)
- **Test files**: 3
- **Coverage areas**: Location privacy, issue management, multiple locations
- **Performance**: All tests complete in <1 second

### Quality Gates
- **Zero failing tests** on main branch
- **All new features must have tests**
- **Minimum 90% pass rate for PRs**
- **Critical path features need comprehensive edge case testing**

## 🔄 Continuous Integration

### Pre-commit Checklist
```bash
# 1. Run linting (if available)
npm run lint

# 2. Run type checking
npx tsc --noEmit

# 3. Run full test suite
node test.js

# 4. Verify all tests pass
# Expected: Tests run: 58, Passed: 58, Failed: 0
```

### Automated Testing
Consider adding these to CI/CD:
- Run tests on every PR
- Block merges if tests fail
- Generate test coverage reports
- Performance regression testing

## 📚 Additional Resources

- **Plus Codes Documentation**: https://github.com/google/open-location-code
- **Node.js Test Runner**: https://nodejs.org/api/test.html
- **TypeScript Testing**: Consider vitest or jest for advanced features

## 🎯 Testing Philosophy

> "Test-driven development isn't just about testing—it's about designing better, more reliable software. Every test is a specification of how the system should behave."

**Remember**: Tests are not just validation—they're documentation, specifications, and safety nets. Write them with care, maintain them diligently, and they'll serve as the foundation for reliable, privacy-first location functionality.

---

*Last updated: December 2024*
*Test suite version: 58 tests across 3 files*