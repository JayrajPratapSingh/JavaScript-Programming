const Person = {
        "firstName": "jayraj",
        "gender": "male",
        "age":"34",
        "about":function(){
             console.log(`He is a great coder, His name is ${this.firstName}`) // for accessing any variable you have to use this.firstName otherwise it will give reference error
       
        }
    }

    // Person.about() // works fine

    const fun = Person.about
    fun() // gives undefined do not do this because this stores only reference at time of call it did not get this it get but it is globle window object
    