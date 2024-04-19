import express from "express";
import bodyParser from "body-parser";
import { tasks } from "./data.js";

const app = express();
app.use(bodyParser.json());

app.get("/tasks", async(req, res) =>{
    res.json(tasks);
});

app.post("/tasks", async(req, res)=>{
    const data = req.body;
    console.log("Task data: ", data);
    //thêm task vào danh sách
    tasks.push(data);
    res.json(data);
})

app.get("/tasks/:id", async(req, res)=>{
    const params = req.params;
    const id = params.id;

    console.log("Get tasks by ID: ", id);
    const task = tasks.find((item) => item.id === id );
    res.json({
        task,
    });
});

app.delete("/tasks/:id", async(req, res)=>{
    const params = req.params;
    const id = params.id;

    console.log("Delete tasks by ID: ". id);
    tasks = tasks.filter((item) => item.id !==id);

    res.json({
        status: true,
    });
});

app.listen(3000, ()=>
{
    console.log("ExpressJS Server is running on post 3000");
});

