import inquirer from "inquirer"
let todos = [];
let condition = true;

while(condition){
let todoQuestion= await inquirer.prompt (
   [
         {
            name:"firstQuestion",
            type:"input",
            message:"what would like to add in your todos?"
         },
         
         {
            name:"secondQuestion",
            type:"input",
            message:"would you like to add more in your todos?", 
            default: "true"
         }
        ] 
      
);
todos.push(todoQuestion.firstQuestion);  
console.log(todos)
//The loop is running on the basis of this variable condition
condition = todoQuestion.secondQuestion;}