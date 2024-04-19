import http from "http";
import {tasks} from "./data.js";
import { stringify } from "querystring";

//tao web server
const server = http.createServer();

server.on("request", async(req, res) =>{
    //đường dẫn client request lên
    const url = req.url;
    //HTTP method: GET, POST, PUT,..
    const method = req.method;

    switch(url){
        case "/tasks":
        if(method === "GET"){
            //xu ly tra ve danh sach task
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(JSON.stringify(tasks));
        }
        break;
        default:
            res.writeHead(404);
            res.end();
    }
});

server.listen(3000, ()=>{
    console.log('Server is running on post 3000');
});
