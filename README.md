## String Calculator TDD Kata

### Project Overview

This project is a JavaScript-based solution to the "String Calculator TDD Kata," a task designed to build a string calculator using Test-Driven Development (TDD) principles. Each addition to the codebase is paired with specific unit tests written using Jest, a popular JavaScript testing framework.

- **Primary Language**: JavaScript
- **Test Framework**: Jest
- **IDE**: Visual Studio Code

### Commits Breakdown

Each commit represents a crucial step in the TDD process, where tests are created before implementing functionality. Here’s a summary of each commit:

---

#### 🚀 Initial Setup of TDD
- **Commit**: [Initial setup of TDD](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/4aef1d88e9b33b369bfb1a27db95d3e336674a40)
- **Description**: Completed the initial setup for the JavaScript development environment, including installing and configuring Jest for testing.

---

#### 🧪 Add Failing Unit Tests for Basic Addition - Task 1
- **Commit**: [Add failing unit tests for basic addition](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/6cad8bfa91e2ea4ac68f183932bbbee8be6445c2)
- **Description**: Created tests to validate the core functionality of the `add` function, designed to perform basic addition operations on a string of numbers. 

---

#### ✅ Rename Function for Clarity
- **Commit**: [Rename function from `string_cal` to `add`](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/e15b4e694ffb267bffcbe992d10d14138357d60b)
- **Description**: Updated the function name from `string_cal` to `add` for consistency with standard naming conventions and improved readability.

---

#### ✅ Implement Basic Addition Logic - Task 1
- **Commit**: [Implement core logic for basic addition](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/f61dca86776b8a4523a2cd76925c66b97984f1f8)
- **Description**: Implemented the basic addition functionality within the `add` function to ensure it can process strings of numbers and return their sum.

---

#### 🧪 Add Failing Tests to Handle Multiple Numbers - Task 2
- **Commit**: [Add failing unit tests for multiple numbers](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/57624b3729f5dbb78a1ae27771a77f1c07d73191)
- **Description**: Expanded test cases to handle multiple numbers within a single string, validating that the `add` function can handle any number of inputs.

---

#### ✅ Implement Logic to Handle Multiple Numbers - Task 2
- **Commit**: [Implement logic to handle multiple numbers](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/d39192a578ad320d9fdf976533a62f362b30438b)
- **Description**: Enhanced the `add` function to accommodate an unlimited number of inputs, ensuring accurate results for various string inputs.

---

#### 🧪 Add Failing Test to Support New Line Delimiters - Task 3
- **Commit**: [Add failing test for newline delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/864c8d1725268f272be9c8bb362e991f673ed817)
- **Description**: Created a test to check if the `add` function can correctly process new lines (`\n`) as delimiters between numbers.

---

#### ✅ Implement Logic for New Line Delimiters - Task 3
- **Commit**: [Implement logic for newline delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/5eacdc8c09a77f0b080619a2e261f1a1a3a7c89f)
- **Description**: Added support for newline characters as valid delimiters within the `add` function, allowing mixed delimiter use.

---

#### 🧪 Add Failing Tests to Support Custom Delimiters - Task 4
- **Commit**: [Add failing tests for custom delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/4ff481450ae8e439b723f5c3fa5f4b873490f7fe)
- **Description**: Created tests to check the function's behavior when using custom delimiters defined at the start of the string.

---

#### ✅ Implement Logic to Handle Custom Delimiters - Task 4
- **Commit**: [Implement logic for custom delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/11246919fca5cec93ae141106d68c573bbcdf6ab)
- **Description**: Implemented support for custom delimiters, parsing them from the input and processing the string accordingly.

---

#### 🧪 Add Failing Test for Negative Numbers - Task 5
- **Commit**: [Add failing test for negative numbers](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/f22f38de1bc556f1175ab11fda433245fcbbf976)
- **Description**: Introduced a test to ensure the `add` function throws an exception if the input contains negative numbers.

---

#### ✅ Implement Exception Handling for Negative Numbers - Task 5
- **Commit**: [Implement exception for negative numbers](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/3c53bcbe00ad265bc39879419e8ff8b031ab51d5)
- **Description**: Enhanced the function to detect negative numbers and throw an exception, listing all negatives in the error message.

---

#### 🚀 Optimize the code for further integration
- **Commit**: [Optimize code](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/a70921784d076611ceb32deb9e6dc50ff53bbbe5)
- **Description**: Optimize the code for further task complete in tdd kata-1 assessment

---

#### 🧪 Add Failing Test for Ignoring Numbers Greater Than 1000 - Task 6
- **Commit**: [Add failing test to ignore numbers greater than 1000](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/ac164a098bb76f0ccbfdd6fe3b1945eba4b99f04)
- **Description**: Added tests to check that numbers larger than 1000 are ignored in the sum calculation.

---

#### ✅ Implement Logic to Ignore Numbers Greater Than 1000 - Task 6
- **Commit**: [Implement logic to ignore numbers greater than 1000](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/cbc2b7e1864527107f4e2ae3e19c3f8f60fc8342)
- **Description**: Modified the `add` function to exclude numbers over 1000 from the sum, ensuring only valid numbers are counted.

---

#### 🧪 Add Failing Test for Delimiters of Any Length - Task 7
- **Commit**: [Add failing test for multi-character delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/a05b4724a9354616dbc0927b87e8368859a68f23)
- **Description**: Added tests to support delimiters of arbitrary length, such as `***`.

---

#### ✅ Implement Logic for Multi-Character Delimiters - Task 7
- **Commit**: [Implement logic for multi-character delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/a05b4724a9354616dbc0927b87e8368859a68f23)
- **Description**: Enhanced delimiter handling in `add` to allow delimiters of any length within square brackets.

---

#### 🧪 Add Failing Test for Multiple Delimiters - Task 8
- **Commit**: [Add failing test for multiple delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/0f60b42d3a1673bd9ef360061e45a8ca6c43673e)
- **Description**: Created tests to validate the function’s behavior with multiple delimiters, such as `[*]` and `[%]`.

---

#### ✅ Implement Logic for Multiple Delimiters - Task 8
- **Commit**: [Implement logic for multiple delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/8b81c0defc843cbacab88896c470a2e36652b1f1)
- **Description**: Updated the `add` function to support multiple custom delimiters, ensuring correct parsing and summing of numbers with any number of delimiters.

---

#### ✅ Implement Logic for Multi-Character Multiple Delimiters - Task 9
- **Commit**: [Implement logic for multi-character multiple delimiters](https://github.com/Ronak1257/TDD_INCUBYTE_ASSESSMENT/commit/7f9cf4e3988caa249ac70d4d9707c522691855f8)

### Conclusion

Through systematic TDD, each phase of the `String Calculator` functionality was designed, tested, and implemented. This approach:

- Ensures reliable and predictable behavior across diverse test scenarios.
- Provides a robust framework for future extensions of the calculator.
- Highlights the importance of TDD in maintaining high code quality and functionality adherence.
