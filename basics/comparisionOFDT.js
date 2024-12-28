//console.log("02">1);
console.log(null>=0); //true
console.log(null>0) //false
console.log(null ==0) ; //false

//The reason is that an equality check == and comparision <>,>=,<= works diffrently
//comparision convert null to number treating as 0

console.log(undefined==0); //always give FALSE wth all conversion and equality
console.log(2==2);  //== check only value
// === check both value and datatype  
console.log("2"===2); //false
console.log("2"==2);//true







