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