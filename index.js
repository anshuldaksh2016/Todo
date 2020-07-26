const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');




// by using the pool we can run the queries with postgres

//  middle ware 

app.use(cors());
app.use(express.json());
// req.body() we can access this object

//  routes


// create todo 

app.post("/todos",async(req,res) => {
    // async provides us await which wait for the fxn to complete 
    try {
    // await 
        // console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
        "INSERT INTO todo_table (description ) VALUES($1) RETURNING *" ,
         [description]
         );

         res.json(newTodo.rows[0]);
        
    } catch (err) {
        console.log(err);
    }

})


// get all todos

app.get("/todos",async (req,res) => {

    try {
        const allTodos = await pool.query('SELECT * FROM TODO_TABLE ');
        res.json(allTodos.rows);
        
        
    } catch (err) {
        console.log(err);
    }
})

// get a todo

app.get('/todos/:id', async (req,res) => {
    
    try {
        const {id} = req.params;
        const todo = await pool.query("select * from todo_table where todo_id=$1",[id])
        res.json(todo.rows[0]);
        // console.log(req.params);
        // get the parameter of url

    } catch (err) {
        console.error(err.message);
        
    }
});

// update the todo

app.put("/todos/:id", async (req,res) => {
    try {
        
        const { id } = req.params;

        const {description} = req.body;

        const updateTodo = await pool.query("UPDATE todo_table SET description = $1 WHERE todo_id = $2" ,
         [description , id]
         );

         res.json("todo was updated ");

    } catch (err) {
        console.error(err.message);
    }
});

// delete the todo
app.delete("/todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo_table WHERE todo_id=$1",
        [id]);

        res.json("Todo was deleted ");


    } catch (err) {
        console.error(err.message);
    }
} );


// Returns middleware that only parses json and only looks at requests where the Content-Type
//  header matches the type option.
var PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log("server started  on 5000");
})