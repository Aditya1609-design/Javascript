// these three will be false
console.log(null==0)
console.log(null>0)
console.log(null<0)
// // these two will be true
console.log(null>=0)
console.log(null<=0)
// the reason is that these operators works differently from each other 
// in last operators null is converted into 0 and then being compared
// note-->so these types of cnversion are being avoided

// strict check-->it checks the value and the datatype as well
console.log("2"===2)





