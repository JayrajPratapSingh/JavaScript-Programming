//<<<<<<< Call Back Functions  >>>>>>>>>>>>
// When a function takes a function as parameter then it is called Callback function
// function myFunc(a){
//     console.log("Hello world")
//     a("Hero")
// }
 

// function anyFunc(b){
//     console.log("My stupid Friend")

//     console.log(b)
// }

// myFunc(anyFunc)


// Function Returning Function
// If a function return a function

function myFunc(){
        console.log("Hello world")
      
        function anyFunc(){
            console.log("My stupid Friend")
        }

        return anyFunc
    }
     
    

    
    const newFunc = myFunc()

    newFunc()


    // Higher Order function

    // if you are taking a function as parameter of returning a function or doing both this is called higher order function