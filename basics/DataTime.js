//dates

let mydate=new Date()

/*console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate); //date is a object!!!*/

//let mycreateDate=new Date(2023,0,23) //month 0 se start hote h
//console.log(mycreateDate.toDateString());

//yy-mm-dd

let mycreateDate=new Date(2023,0,23,5,3,5) //month 0 se start hote h
//console.log(mycreateDate.toString());

//let date=new date("01-14-2023")

let mytimestamp=Date.now()
//console.log(mytimestamp.toLocaleString());

console.log(Math.floor(Date.now()/1000));





