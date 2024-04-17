//<<<<<<<<<<<<< Optional Chaining  >>>>>>>>

const user = {
    "name": "Jayraj",
    "address": {"village":"Bhari", "state":"Uttar Pradesh", "Pin":"2334556 "}
}

// Kabhi kabhi aisa hota ha ki users k address me address nahi hota agara aap code kar rahe hai to kisi person ka address nahi mila
// to ye Undefined error show karata hai isase app crash ho sakta hai
// aur ager object ke andar object hai to chaining karte waqut error dega: can not read property because of undfined
// ise avoid karne k liye ham ?. ka use karte hai
// console.log(user.address.village) // ager address nahi hai to ye error dega bada sa 

console.log(user?.address?.village)// agar address nahi hai to ye error nahi dega undefined dega jo ki error dene se behtar hai
