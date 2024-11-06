const add=require("../model/string_cal");

describe("1: Create a simple string calculator",()=>{
    test("add('') should return 0",()=>{
        expect(add("")).toBe(0);
    });
    test("add('1') should return 1",()=>{
        expect(add("1")).toBe(1);
    });
    test("add('1,5') should return 6",()=>{
        expect(add("1,5")).toBe(6);
    });
});

describe("2: Allow the add method to handle an unknown amount of numbers",()=>{
    test("add('1,2,3,4,5') should return 15",()=>{
        expect(add("1,2,3,4,5")).toBe(15);
    });
});

describe("3: Allow the add method to handle new lines between numbers (instead of commas)",()=>{
    test("add('1\\n2,3') should return 6",()=>{
        expect(add("1\n2,3")).toBe(6);
    });
    test("add('1\\n2,3\\n4') should return 10",()=>{
        expect(add("1\n2,3\n4")).toBe(10);
    });
});

describe("4: Support different delimiters",()=>{
    test("add('//;\\n1;2') should return 3",()=>{
        expect(add("//;\n1;2")).toBe(3);
    });
    test("add('//-\\n1-2-3') should return 6",()=>{
        expect(add("//-\n1-2-3")).toBe(6);
    });
    test("add('//:\\n1:2:3:4') should return 10",()=>{
        expect(add("//:\n1:2:3:4")).toBe(10);
    });
});

describe("5: Negative numbers", () => {
    test("Calling add with a single negative number throws an exception with that number", () => {
        expect(() => { add("-1"); }).toThrow("negative numbers not allowed -1");
    });

    test("Calling add with multiple negative numbers throws an exception listing all negative numbers", () => {
        expect(() => { add("-1,-2,-3"); }).toThrow("negative numbers not allowed -1,-2,-3");
    });

    test("Calling add with positive and negative numbers throws an exception listing only negative numbers", () => {
        expect(() => { add("1,-2,3,-4"); }).toThrow("negative numbers not allowed -2,-4");
    });

    test("Calling add with no negative numbers does not throw an exception", () => {
        expect(() => { add("1,2,3"); }).not.toThrow();
    });
});

// TDD KATA-1 Assement Test Cases

describe("6: Numbers bigger than 1000 should be ignored",()=>{
    test("add('1001,2') should return 2",()=>{
        expect(add("1001,2")).toBe(2);
    });
    test("add('1000,2') should return 1002",()=>{
        expect(add("1000,2")).toBe(1002);
    });
});

describe("7: Delimiters can be of any length",()=>{
    test("add('//[***]\\n1***2***3') should return 6",()=>{
        expect(add("//[***]\n1***2***3")).toBe(6);
    });
});