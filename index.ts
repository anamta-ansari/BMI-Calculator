import inquirer from "inquirer";
const weightInKg = await inquirer.prompt(
    {
        name : "weight",
        type : "input",
        message: "Enter your weight"
    }
);
const heightInMetres = await inquirer.prompt(
    {
        name : "height",
        type : "input",
        message: "Enter your height"
    }
);
let BMI = weightInKg.weight / (heightInMetres.height * heightInMetres.height);
console.log(`Your BMI is ${BMI}`);
