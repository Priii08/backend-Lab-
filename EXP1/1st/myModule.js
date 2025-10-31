exports.users = {
  name: "Priyanshi",
  details: {
    age: 20,
    role: "Developer",
  },
};

exports.sayHello = function (name) {
  return `Hello, ${name}!`;
};


exports.utils = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
};


//MODULE_NOT_FOUND: was not inside EXP1 folder 
//TypeError: wrote users instead of user


//we could have exported a single object, we wouldnt have to write exports again and again
// Module.exports = {
//   users: {
//     name: "Priyanshi",
//     details: {
//       age: 20,
//       role: "Developer",
//     },
//   },


// sayHello(name) {
//   return `Hello, ${name}!`;
// },


// utils: {
//   add: (a, b) => a + b,
//   multiply: (a, b) => a * b,
// }
// };


//we could have exported objects seperately
