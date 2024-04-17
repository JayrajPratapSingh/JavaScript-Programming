//<<<<<<<<<<<< Static Mehod and Properties  >>>>>>>>>

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){ // this will direct related to Person class
        return `this is person class static Method`
    }
    static desc  = "class description" // this is static property
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        // ["Jayraj","Singh"]
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }
}
let person1 = new Person("jani", "dusman", 34)

// you can not call static method like
// person1.classInfo() // you will get error
// Direct write classname
console.log(Person.classInfo())
console.log(Person.desc)
