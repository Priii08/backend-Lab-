const myModule = require("./myModule");

console.log(myModule.users.name);          


console.log(myModule.sayHello(myModule.users.name));  

console.log("my role is",myModule.users.details.role); 
console.log("my age is",myModule.users.details.age);

console.log("The sum is", myModule.utils.add(28, 3));    
console.log("The product is", myModule.utils.multiply(4, 12));
