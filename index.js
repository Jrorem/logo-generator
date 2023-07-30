const fs = require("fs")
const inquirer = require("inquirer")

const { Triangle, Square, Circle } = require("./lib/shapes")

function promptUser(){
inquirer.prompt([
    {
     type: "input",
     message: "input no more than 3 characters ",
     name: "text"
    },
    {
     type: "input",
     message: "Input text color keyword or hex ",
     name: "textColor"
    },
    {
     type: "list",
     message: "Choose a background shape ",
     choices: [{name:"square", value: Square},{name: "triangle", value: Triangle},{name: "circle", value: Circle}],
     name: "shape"
    },
    {
     type: "input",
     message: "Input a shape color keyword or hex ",
     name: "shapeColor"
    },
])

.then(({text, textColor, shape, shapeColor}) => {

    let newShape;

    let shapeOptions = {
        text: text,
        textColor: textColor,
        shapeColor: shapeColor, 
        shape: shape 
    };
    newShape= new shape(shapeOptions);

    fs.writeFile('examples/logo.svg', newShape.render(), err => {
        if (err) {
            console.log(err);
        } else {
            console.log('logo generated')
        }
    })

})


 
}

promptUser()
