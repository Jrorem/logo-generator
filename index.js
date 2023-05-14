const fs = require("fs")
const inquirer = require("inquirer")

inquirer.prompt([
    {type: "input",
     message: "input up to 3 characters ",
     name: "text"
    },
    {type: "input",
     message: "Input text color keyword or hex ",
     name: "textColor"
    },
    {type: "list",
     message: "Choose a background shape ",
     choices: ["square,", "triangle", "circle"],
     name: "shape"
    },
    {type: "input",
     message: "Input a shape color keyword or hex ",
     name: "shapeColor"
    },
])