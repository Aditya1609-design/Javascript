// o the basis of accessing and storing the data into memeory the data is devided into two types
// primitive-->these are call by value , they are of 7 types
// types-->string,Number,Boolean,null,undefined,symbol(it is used for the uniqueness),BigInt(useds for lage integer values)

let id=Symbol(123)
let anotherId=Symbol(123)
console.log(id===anotherId)
console.log(typeof(id))


// non primitive-->these are call by reference
// types-->arrays,objects,functions


// ****************. momeory storage ***********
// stack(type of storage used for primitive datatypes) and heap(type of storage used for non primitive datatypes)