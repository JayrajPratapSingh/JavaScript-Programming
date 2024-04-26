const mainHeading = document.getElementById("main-heading")
console.log(mainHeading.textContent) // Text ka contant dega
mainHeading.textContent = "This is somethig about task"
console.log(mainHeading.textContent) // ye sara ka sara text content dega jo dikh nhi raha matlab hidden hai wo bhi dega jaise uske andr span banao display hidden karo aur hello likho display hidden hone k bawjud bhi text dega
console.log(mainHeading.innerText) // ye bas wahi dega jo us class ka hai us class me dusre tag ka text nahi dega
console.log(mainHeading.style)
mainHeading.style.color = "blue"
mainHeading.style.backgroundColor = "yellow"  // - wali chich camel case me likhi jayegi
mainHeading.style.border = "2rem solid green"
