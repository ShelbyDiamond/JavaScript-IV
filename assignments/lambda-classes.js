// CODE here for your Lambda Classes
/* Creating the base "People" Class here to break everything else down from
        - First we need a Person class. This will be our `base-class`
        - Person receives `name` `age` `location` all as props
        - Person receives `speak` as a method.
        - This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props*/

class People {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello. My name is ${this.name}. I am from ${this.location}`;
  }
}

/*
Here is my Instructor Class-- 
    - Instructor uses the same attributes that have been set up by Person
    - Instructor has the following unique props:
    - `specialty` what the Instructor is good at i.e. 'redux'
    - `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
    - `catchPhrase` i.e. `Don't forget the homies`
    - Instructor has the following methods:
    - `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    - `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends People {
  constructor(att) {
    super(att);
    this.specialty = att.specialty;
    this.favLanguage = att.favLanguage;
    this.catchPhrase = att.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}. Aren't you excited?!`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

/* Student
Here is where I put my Student class:
    - Student uses the same attributes that have been set up by Person
    - Student has the following unique props:
    - `previousBackground` i.e. what the Student used to do before Lambda School
    - `className` i.e. CS132
    - `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
    - Student has the following methods:
    - `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    - `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    - `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  */

// const ben = new Student({
//   name: "Ben Wilson",
//   age: "24",
//   location: "Mesa, Arizona"
// });

// const jashele = new Student({
//   name: "Jashele Tillman",
//   age: "23",
//   location: "Phoenix, Arizona"
// });

// const dj = new Student({
//   name: "DJ Coleman",
//   age: "20",
//   location: "Sacramento, California"
// });
// console.log(ben.speak());
// console.log(ben.speak.call(jashele));
