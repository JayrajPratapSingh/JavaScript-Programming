// Loops in Array
let array = [1,2,4,5,6,5,6]


for(let i=0;i<array.length; i++){
    console.log(array[i])
}


//Use Const for Creating Array 
// In heap it stores only address thats why we can chang in Array while using const variable but you cant use variable name and adding by = sign const dosent allow it

const Fruits = ["Banana", "Apple", "Mango"]
Fruits.push("Guavava")

console.log(Fruits)


// For loop another Mehod

for(let fruit of Fruits){
    console.log(fruit.toUpperCase())
}


// For In Loop --> It gives Indexs

for(let Index in Fruits){
    console.log(Fruits[Index].toUpperCase())
}


// Destructuring

const [var1, var2,var3,var4] = Fruits
console.log("Destructuring: ",var1,var2, var3, var4)