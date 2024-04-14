//<<<<<<<<<< OBJECT INSIDE ARRAY  >>>>>>>>>>>>

// Very useful in real world array

const Users = [
    {UserId:"1", name:"Chapal", age:"24"},
    {UserId:"2", name:"Ghuntu", age:"16"},
    {UserId:"3", name:"Bhumba", age:"20"},
    {UserId:"4", name:"Piku", age:"21"}
]

for(let user of Users){
    console.log(user.name)
}


// Nested Destructuring

const [{name}, , {age}] = Users

console.log(name, age)