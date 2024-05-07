const myMock = jest.fn();
console.log(myMock());

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
/////////// 7 mock fun
export const Add = (a, b, callback) => {
    callback(a + b);
  };
/////////// 8 mock fun

/////////////////////////////
let count = 0;

export const  increaseCount  = ()=>{

    // increasing the count by 1
    count += 1;
    console.log(count)
}


let id = setTimeout(increaseCount, 3000);

export const stopTime = ()=>{
    clearTimeout(id); 
console.log('setTimeout is stopped.');

}


  
 