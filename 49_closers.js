//<<<<<<<<<<<<<<<<<< Closers  >>>>>>>>>>>>>>>>>>

// Jab koi function apne lexical invironment k memory ko le ke return hota hoi to use closers kahate hai

// EXp

function fullName(firstName, lastName){
function printName(){
    console.log(firstName, lastName) // inner function outer function k memory ko le k return hoga / ya access kar sakta hai

}
return printName() // this will return full name 
}

const fullName1  = fullName("Jayraj", "Singh")
console.log(fullName1)
// check video 2 to 2:7


// other exmple of closer

function MyFunc(){
    let counter = 0
    return function(){
        if(counter<1){
            console.log("Kya bhau kaiko call kiya!")
            counter++
        }
        else{
            console.log("Tune abhi call kiya to tha fir se kyu call kiya!")
        }
    }
}

const fuc = MyFunc()
fuc()
fuc()
