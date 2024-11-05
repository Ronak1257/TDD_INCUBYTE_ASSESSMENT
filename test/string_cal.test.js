const add=require("../model/string_cal");

describe("1: Create a simple string calculator",()=>{
    test("string_cal('') should return 0",()=>{
        expect(add("")).toBe(0);
    });
    test("string_cal('1') should return 1",()=>{
        expect(add("1")).toBe(1);
    });
    test("string_cal('1,5') should return 6",()=>{
        expect(add("1,5")).toBe(6);
    });
});