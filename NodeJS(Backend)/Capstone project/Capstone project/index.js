import express from "express";
import bodyParser from "body-parser";


const todos = [{
  todoId: "1",
  todoTask: "Code",
},
{
  todoId: "2",
  todoTask: "Sleep",
},
{
  todoId: "3",
  todoTask: "Coffee",
}
];  

const app = express();
const port = 3000;
// Body Parser is used to sent data to module.  used everwhere.
app.use(bodyParser.urlencoded ({extended:true}));

app.post("/",(req,res)=>{
  const inputTodoId = todos.length + 1;
  const inputTodoTask = req.body.todoTask;

  todos.push({
      todoId: inputTodoId,
      todoTask: inputTodoTask
  });

});

app.post("/delete", (req, res) => {
  var requestedtodoId = req.body.todoId;
  var j = 0;
  todos.forEach((todo) => {
      j = j + 1;
      if (todo.todoId === requestedtodoId) {
          todos.splice(j - 1, 1);
      }
  });
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index.ejs",{data: todos});
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
