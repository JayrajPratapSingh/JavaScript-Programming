//<<<<<<<<<<< FUNCTION >>>>>>>>>>>>>>>>
//<<<<<<< Function Declaration  >>>>>>

function happyBirthday(){
    console.log("mere yaar tera happy birthday")
}

happyBirthday()


//Reusable function 
//

function Sum(num1, num2){  // num1 and num2 are called parameter
    return num1 +num2
}


const summetion = Sum(3,4)  // 3 and 4 are called argument 
console.log(summetion)

// Function could have many many parameter and arguments it's depend on neccesity

// <<<<<<<<<<<<<<<< Function Expression >>>>>>>>>>>


const Sums =function (num1, num2){  // num1 and num2 are called parameter
    return num1 +num2
}

console.log(Sums(5,7))


//<<<<<<<<< Arrow Function >>>>>>>
// it is short vertion of function declaration

const Cube = (hight,length,width) =>{
    const cube = hight*length*width
    return cube
}

// OR

const CubeArea = (h,l,w) =>  h*l*w  // no need to write return

console.log(CubeArea(2,3,4))
console.log(Cube(2,3,6))
