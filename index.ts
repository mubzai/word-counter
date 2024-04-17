import inquirer from "inquirer"
const anwsers: {
            sentence:string
  }  =await inquirer.prompt([
    {
      name: "sentence",
      type: "input",
      message: "Enter your sentence to count the word"
       
   }
  
  ]
)
const words = anwsers.sentence.trim().split(" ")
console.log(words)
console.log(`your sentence word count is ${words.length}`);
