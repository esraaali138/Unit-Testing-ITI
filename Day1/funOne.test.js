import {reverseNumber} from './funOne'
test('reverse a number' , ()=>{
    const expected = 2001
    expect(reverseNumber(1002)).toBe(expected)
})
/////////
import { pilandromeFun } from "./funOne";
test('pliandrome must be the same result ', () => {
    const res = pilandromeFun("oppo");
    const expected = "oppo"

  expect(res).toBe(expected)
})
/////////////
import { lonestWordFun } from "./funOne";
test('return the longest word  ', () => {
    const res = lonestWordFun("Web Development Tutorial");
    const expected = "Development";
    expect(res).toBe(expected);
})
//////////////////
import { Car } from "./funOne";
test('return my name and my age ', () => {
    const result = new Car("esraa" , 1999);
  const res =  `your name is ${result.name} and your age ${result.age()}`
  const expected = "your name is esraa and your age 25";
  expect(res).toBe(expected)
})
//////////////
import { addNumber } from "./funOne";
test('return the sum of total and number ', () => {
  const res = addNumber(10,10,10,10);
  const expected = 40;
    expect(res).toBe(expected)
})
////////////////
import { addStudent ,refreshStudentList } from "./funOne";

test("function return function ", () => {
  const result = addStudent( refreshStudentList); 


  const expected = "Hello esraa";
  expect(result).toBe(expected);
});

/////7 
import { Add } from "./mockFun";
test("calls callback with arguments Add", () => {
    const res = jest.fn();
    Add(1, 2, res);
    expect(res).toHaveBeenCalledWith(3);
  });
//////////////////////
import { stopTime } from "./mockFun";
test('clear interval stop the count ', () => {
  const res = jest.spyOn(console , "log");

  stopTime();
  expect(res).toHaveBeenCalledWith('setTimeout is stopped.')
  
})
/////////
import { count } from "./funOne";
test('return the count of charcters ', () => {
  const res = count("esraa");
  const expected = `
  e 1
  s 1
  r 1
  a 2
  `
  expect(res).toBe(expected)
})
////////////////
import { markNum } from "./funOne";
test('return num greater than 10 ', () => {
  const res = markNum([0, 7, 77]);
  const expected = 77;
  expect(res).toBe(expected)
})


