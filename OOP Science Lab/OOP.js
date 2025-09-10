/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const participant = {
    name: "Josh",
    age: 33,
    studyField: "Computer Science"
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participantWithInfo = {
    ...participant,
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`);
    }
};
participantWithInfo.displayInfo();
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantWithArrowInfo = {
    ...participant,
    displayInfo: () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`);
    }
};
participantWithArrowInfo.displayInfo();
/*
 * Observations:
 * TODO: Explain here. Arrow functions don't have their own "this" terminology. They utilize the "this" value from the global context. This means it refers to the whole context of the object and would display as blank or undefined.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(obj, propName, propValue) {
    return {
        ...obj,
        [propName]: propValue
    };
}