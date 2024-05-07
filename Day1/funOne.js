export const reverseNumber = (num)=>{
    num = num + "";
    return num.split("").reverse().join("");
}
// const res = +reverseNumber(1002)
// console.log(res);
// module.exports = {res}

 export function pilandromeFun (Name){
    let resName  = Name.split("").reverse().join("");
    if(Name === resName) {
        
            console.log("yes pilandromeFun is working ");
    }
    else {
        console.log("not working ");

    }
    return resName

}

 export const lonestWordFun = (word)=>{
    let longWord = 0;
    let longest_word = null;
    const wordArr = word.split(" ");
    for(let i=0; i < wordArr.length ; i++) {
        if(longWord < wordArr[i].length) {
            longWord = wordArr[i].length;
            longest_word = wordArr[i] // wanna ask in it 
        }
    }
    return longest_word
}

export class Car {
    constructor(name ,year) {
        this.name = name;
        this.year = year
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year
    }
}
const result = new Car("esraa" , 1999);

// console.log(res.age()); //25


export const addNumber = (...nums) => {
    return nums.reduce((total , num) => total+num)
}

 export function addStudent(refreshCallback) {
    refreshCallback();
}

export function refreshStudentList() {
    console.log('Hello esraa');
}

addStudent( refreshStudentList); 


export function count(string) {
    let string1 = string.split("").sort().join("");
    let counter = 1;
    for (let i = 0; i < string.length; i++) {
      if (string1[i] == string1[i + 1]) {
        counter++;
      } else {
        console.log(string1[i] + " " + counter);
        counter = 1;
      }
    }

    
  }
  count("esraa")

const marks = [30, 70, 98, 77];
console.log(marks.find(checkMarks)); 
function checkMarks(mark) {
 return mark > 90; 
} 
98
export const markNum = (mark)=>{
    const res = mark.find((m)=>m > 10);
    return res
}
console.log(markNum([0, 7, 77]));  
