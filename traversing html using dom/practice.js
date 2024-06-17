// const fruits = [3,5,2,4,8]
// const all = fruits.some(function2)

// // converts array index to string
// const string = Array.from("ABCDEF")
// console.log(string)

// function function2(value){
//    return value > 2
// }
// console.log(all)


// //.entries() and .keys()
// const entry = fruits.entries()
// var sum = ""
// for(let x of entry){
//    sum += x + "    "
// }
// console.log(sum)


// //spread operator
// const arr1 = ["hero" , "marvel"]
// const arr2 = ["lol ", "ji"]
// const arr3 = ["bahubali" , "mehu"]
// const newArr = [...arr1,...arr2,...arr3]
// console.log(newArr)

// //.indexOf
// const indexof = arr1.indexOf("marvel")
// console.log(`postion is : ${indexof + 1}`)
// // same as lastindexOf

// //.include("")
// const include = arr1.includes("hero")
// console.log(include)

const nums = [2,4,12,14]
const filter = nums.filter(function5)

function function5(){
    return nums > 2
}
console.log(filter)
