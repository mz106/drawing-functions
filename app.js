const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const functionOne = require("./functionOne/functionOne");

const app = (commandLineInput) => {
    try {
        console.log(functionOne(commandLineInput.name));
    } catch (error) {
        console.log(error);
    }
};

// app(argv);

const personOne = {
    name: "steve",
    age: 30,
    isTall: true
};

const personTwo = {
    name: "bill",
    age: 22,
    isTall: false
};

const personThree = {
    name: "jane",
    age: 23,
    isTall: false
};

const personFour = {
    name: "jeff",
    age: 68,
    isTall: false
};

const showPeople = (aPerson, anotherPerson) => {
    console.log(aPerson.name, anotherPerson.name)
};

const showPeople2 = () => {
    console.log(personOne.name, personTwo.name)
};

showPeople(personOne, personTwo);
showPeople(personThree, personFour);
showPeople2();