//<<<<<<<<<<<<<< Set >>>>>>>>>>>>>>>>>>>
// it is iterable
// stores data
// set also have it's own mehtod,
// No index based access
// Order is not gurenteed
// It stores unique items only (no duplicates allow)

// const numbers = new Set([1,2,4]) //{1, 2, 4}
// const numbers = new Set([1,2,4,]) //{1, 2, 4} no dublicate

// console.log(numbers)
// console.log(numbers[1]) // no access : it will give undefined


/// Adding element in Set

const numbers = new Set()

numbers.add(1)
numbers.add("items")
numbers.add(true)
numbers.add(["item1", "item2"])
numbers.add(["item1", "item2"]) // add ho jayega par variable nahi add hoga agar variable name same hai array ka
// add hoga kyu k memory k andar alag hai address honge
// console.log(numbers)


// If you want to check any element is present in set or not 

// console.log(numbers.has(1)) // true
// console.log(numbers.has(2)) // false

// for(let item of numbers){
//     console.log(item)
// }

// Find length of unique elements


let length = 0
for(let item of numbers){
    console.log(item)
    length++
}
console.log(length) //5

