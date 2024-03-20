// YOUR CODE GOES HERE!!!
/*************************/

//1.)
function getFirstName(obj) { 
  return obj.firstName; 
}

//2.)
function getLastName(obj) {
  return obj.lastName;
}

//3.)
function getFullName(obj) {
  return obj.firstName + " " + obj.lastName;
}

//4.)
function setFirstName(obj, str) {
  obj.firstName = str;
  return obj;
}

//5.)
function setAge(obj, num) {
  obj.age  = num;
  return obj;
}

//6.)
function giveBirthday(obj) {
  if (obj.hasOwnProperty("age")){
    obj.age = obj.age + 1;
 } else {
  obj.age = 1;
 }
   return obj;
}

//7.)
function marry(person1, person2) {
  person1.married = true;
  person2.married = true;
  person1.spouseName = person2.firstName + " " + person2.lastName;
  person2.spouseName = person1.firstName + " " + person1.lastName;
}

//8.)
function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}

/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
  getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
  getLastName = undefined;
}

if (typeof getFullName === "undefined") {
  getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
  setFirstName = undefined;
}

if (typeof setAge === "undefined") {
  setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
  giveBirthday = undefined;
}

if (typeof marry === "undefined") {
  marry = undefined;
}

if (typeof divorce === "undefined") {
  divorce = undefined;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
};
