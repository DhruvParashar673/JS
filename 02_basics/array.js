const myarr=[0,1,2,3,4,5]
 
arr=[0,1]
//console.log(arr);
//in JS  array make shallow copies means if we change incopy array than original array will also change!!

//array methods

myarr.push(6);
//onsole.log(myarr);

myarr.unshift(0);
//console.log(myarr); //shift ho gyi saari value

myarr.shift(0); //zero gayab ho jayega ek!
//console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(9));

const newarr=myarr.join()
console.log(typeof(myarr)); //idhar object
console.log(typeof(newarr));//idhar string m change ho gya

//slice array m se suppose (1,3) toh 1-2 tk ke range m element ko bahar nikal ke output de dega 
//but splice m (1,3) tk 1,2,3 ko rkhega aur baaki sb ko haatake output dega
//slice m original array m change nhi hota kuch 
//lekin splice m original array change hota h !!




