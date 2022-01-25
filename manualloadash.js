// to find the Union manually without loadash
// 1st program
let a = [1, 2, 3, 4]; //enter the number  in  array you want
let b = [3, 4, 5]; //enter the number  in  array you want
let firstprogram = (a, b) => {
  let d = [];
  a.push(...b);
  let c = new Set(a);
  d.push(...c);
  console.log(d);
};
firstprogram(a, b); //it will show the element and remove the duplicate elements make it as single element






// // ***************************************************************************************************************************************

//concat manually without using loadash
// 2nd program
let secondprogram = () => {
  let a = [4, 5, 6, 3]; //enter the number in array you want
  let b = [89, 90, 91]; //enter the number  in  array you want
  let c = [];
  var j = a.length;
  for (let i = 0; i < b.length; i++) {
    a[j] = b[i];
    j++;
  }
  c.push(...a);
  console.log(...c);
};
secondprogram(); //Now it will concat the elements and consoled in screen







// ***************************************************************************************************************************************
// 3rd program
//Take loadash  function  wihout using we writing manually
const array3 = [1, 2, 3, 4]; //enter the number  in  array you want
let thirdprogram = (a) => {
  n = 3; //enter how many numbers you want to take from above array
  p = [];
  for (let i = 0; i < n; i++) {
    p.push(a[i]);
  }
  console.log(p);
};
thirdprogram(array3); //now it will show the elements which you took






// ***************************************************************************************************************************************
// 4th program
//"difference" loadash  function  wihout using we writing manually
const dif1 = [3, 4]; //enter the  2 number in array
const dif2 = [5, 6]; //enter the  2 number in array
const difference = (a, b) => {
    let d = [];
    let f = [];
    let e=[]
    let finalresult=[];
  for(i = 0; i < a.length; i++){
    d.push(a[i + 1] - a[i]);
    f.push(b[i + 1] - b[i]);
}   
e.push(d.shift());
e.push(f.shift());
let result=new Set(e)
finalresult.push(...result)
console.log(finalresult)                  //now you see the diffrenece between two array value and we can use this in for loop to add
};
difference(dif1, dif2);






// ***************************************************************************************************************************************
// 5th program
//"drop" loadash  function  wihout using we writing manually
let array = [1, 2, 3, 4, 5]; //enter the number in array which user want
let number = 3; //enter the number which user want to take upto thath number (if user enter the number which is not the lenght of the array it will show empty array)
var fifthprogram = (x, z) => {
  let y = [];
  let nil = [];
  if (z < x.length) {
    for (i = z; i < x.length; i++) {
      y.push(x[i]);
    }
    console.log(y);
  } else {
    console.log(nil); //if user didnt type any number it will show empty array
  }
};
fifthprogram(array, number);

// ***************************************************************************************************************************************
