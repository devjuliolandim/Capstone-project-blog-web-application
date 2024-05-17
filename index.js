import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/backend", (req,res)=>{
    res.render("backend.ejs");
});

app.get("/c", (req,res)=>{
    res.render("c.ejs");
});

app.get("/java", (req,res)=>{
    res.render("java.ejs");
});

app.listen(port, ()=>{
    console.log(`The server is running in the port ${port}`);
});