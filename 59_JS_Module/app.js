// import { fname } from "./utils/fname";
// import { age } from "./utils/age";
// for default export aur default import ka naam kuch bhi rakh sakte hai direct
// import fname from "./utils/fname.js"
// import age from "./utils/age.js"

// import as other name

import { fname as firstName } from "./utils/fname";
import { age as a } from "./utils/age";

// <!-- agar ham type = "module" nahi use karenge to js file me import export karne pe error dega agar type module hai to defer likhne ki jaroorat nahi hai -->

// console.log(fname, age)
console.log(firstName, a)