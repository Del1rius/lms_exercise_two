var person = require("../lms_exercise_two/person")

var person1 = new person("James", "Bond", "bond007@gmail.com")
var person2 = new person ("Timothy", "Barry", "timothybarry@gmail.com")
var person3 = new person("Someone", "Random", "randomsomeone@hotmail.com")

console.log(person1.personDetails())
console.log(person2.personDetails())
console.log(person3.personDetails())