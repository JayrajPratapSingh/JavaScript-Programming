class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <= 1
    }
    isCute(){
        return true
    }
}

// const animal1 = new Animal("tom", 2)
// console.log(animal1)
// console.log(animal1.eat())

// Cat Class

class Dog{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <= 1
    }
    isCute(){
        return true
    }
}

const tommy = new Dog("tommy", 2)
console.log(tommy)

// Now see kaam hamne same kiya bas class ka name change kiya

// Is chij ko apne class me inherit karne k liye ham ek chij karenge
// Maan lo hame Animal call ki property and method apne Cat naam k class me chhiye

// class Cat extends Animal{ // bas itna karne se hamare pass sari property and method aagye
// // cunstructor ye Animal class ka hi use karegi
// }
// const tuti = new Cat("tuti", 2)
// console.log(tuti)
// console.log(tuti.isCute())


// <<<<<<<<< Super >>>>>>>>
// Now see i have name and age but in Cat class i also want speed of that animal how can i do this let see
// object/instance ek hi baaat hai
class Lion extends Animal{ 
    constructor(name, age, speed){
        super(name, age); // super will import name and age form Animal class means it have power to use Animal class constructor 
        this.speed = speed;
    }
    // also you can modify methods 
    isCute(){
        console.log("Modified : Bahot sundar")
    }
    run(){
        console.log(`${this.name}'s speed is ${this.speed} km/hour`)
    }
    }
    const baghira = new Lion("bagira", 2, 45)// now speed will also come in Loin object

    console.log(baghira)
    baghira.isCute()
  baghira.run()