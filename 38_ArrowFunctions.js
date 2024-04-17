const Person = {
    "firstName": "jayraj",
    "gender": "male",
    "age":"34",
    "about":()=>{
         console.log(`He is a great coder, His name is ${this.firstName}`) // for accessing any variable you have to use this.firstName otherwise it will give reference error
   
    }
}

// Person.about() // Arrow function do not have it's own this it takes it's sorrounging
// so it will give undefined 


// Iska jo this hoga ek level up yani window hoga 

// short form to write function in object or creating method


const Person1 = {
    "firstName": "jayraj",
    "gender": "male",
    "age":"34",
    about(){
         console.log(`He is a great coder, His name is ${this.firstName}`) // for accessing any variable you have to use this.firstName otherwise it will give reference error
   
    }
}



