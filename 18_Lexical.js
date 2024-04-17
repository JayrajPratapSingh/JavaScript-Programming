//<<<<<< Lexical Scope >>>>>>>>>>>>>>

// function Myapp(){
//     const myVar = "kahi nahi hai"
//     function other(){
//        const myVar = "bas yahi hai"  // this will print
//        console.log(myVar) // bas yahi hai
//     }

//     console.log(myVar)  // kahi nahi hai

//    other()
// }

// Myapp()



// Step tow now comment other's myVar variable

// function Myapp(){
//     const myVar = "kahi nahi hai"
//     function other(){
//     //    const myVar = "bas yahi hai"  // this will print
//        console.log(myVar) // kahi nahi hai
//     }

//     console.log(myVar) // kahi nahi hai

//    other()
// }

// Myapp()


// What is lexical invironment?

// In Previous function for other function Myapp is a lexical invironment

const myVar = "yes this is it."

function Myapp(){
    function other(){
       console.log(myVar) // yes this is it
    }
    console.log(myVar) // yes this is it

   
}

Myapp()

// the myVar will be checked that it is defined inside itself in function if no it will check its lexical invironment means there parent function
// if did not get then it will agin check in lexical invironment if it will find then it will print

