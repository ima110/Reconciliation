const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());

let todoState=[];

function randomTodo(){
    let todo =[{
        title : "Exercise",
        description : "From 5 to 7"
    },
    {
        title : "Games",
        description : "From 7 to 9"
    },{
        title : "Coding",
        description : "From 9 to 11"
    },{
        title : "Documentation",
        description : "from 11 to 13"
    },
    {
        title : "Prayer",
        description : "from 15 to 17"
    }]
    
    return todo[Math.floor(Math.random()*todo.length)]
}

setInterval(()=>{
    const newTodo = randomTodo();
    if(!(todoState.some(todo=> todo.title===newTodo.title && todo.description=== newTodo.description))){
      todoState.push(newTodo);
      console.log("New todo added")
    }
    else{
        console.log("Todo skipped")
    }
},2000);

setInterval(()=>{
    todoState =[];
    console.log("Cleared todo")
},11000);

app.get("/todo",(req,res)=>{
    res.status(200).send({todoState});
})

app.listen(3000);