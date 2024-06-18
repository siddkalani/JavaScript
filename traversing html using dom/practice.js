// const fruits = [3,5,2,4,8]
// const all = fruits.some(function2)

// converts array index to string
// const string = Array.from("ABCDEF")
// console.log(string)

// function function2(value){
//    return value > 2
// }
// console.log(all)


//.entries() and .keys()
// const entry = fruits.entries()
// var sum = ""
// for(let x of entry){
//    sum += x + "    "
// }
// console.log(sum)


//spread operator
// const arr1 = [ "marvel","hero"]
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

//difference between filter and find
//filter iterate whole array and give all the values that satisfies
//find search and jaise hi element mile return kardeta hai it return only 1 element

// const nums = [
//     {
//         name:"siddharth",
//         class:2
//     },
//     {
//         name:"harsheel",
//         class:5
//     },
//     {
//         name:"shreya",
//         class:2
//     }
// ]

// const filter = nums.filter(value => value.class === 2)
// const find = nums.find(value => value.class === 2)
// console.log(filter)
// console.log(find)

//.findIndex gives index of that element
//similarly findLast starts searching from last
//similarly findLastIndex

// .sort helps to arrange in alphabetical-order
//.toSorted created a new array to store , safe method

// arr1.sort()
// console.log(arr1)

//.reverse use to reverse the array
//.toReversed creates new array

// numArr = [1,33,21,32]
// //ascending
// numArr.sort((a, b)=>a-b)
// console.log(numArr)

// for fincding min max of arr


// function minmax(arr){
//    return Math.min.apply(null, arr)
//  }
// console.log(minmax(numArr))

const numbers = [
    {
        name: "sidd"
    },
    {
        name: "vinay"
    }
];

// const news = numbers.map(value => {
//     return {
//         ...value,
//         gender:'male',
//         age:20
//     }

// })

// console.log(news)

// const reduce = numbers.reduce((total , value) => {
//      total.push({
//         ...value,
//         gender:'male',
//         age:20
//     })
//     return total
// },[])

// console.log(reduce)

// const finding = news.find((x)=> x.name === "vinay")
// console.log(finding)


// const numericals = [1,35,13,45]

// numericals.forEach()


 
const obj = {
                name: "sidd",
                age: 20,
            }

            console.log(Object.keys(obj).length)