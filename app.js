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

app(argv);