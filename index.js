const express = require("express")
const nunjucks = require('nunjucks')


const app = express();
const users=["Heldilene","Lucas","Adryel", "Hellen", "Auriesley"]
nunjucks.configure("view",{
    autoescape: true,
    express: app,
    watch: true
});

app.set("view engine","njk");



app.get("/", (req, res) =>{
    res.render("index");
});
app.get("/lista", (req, res) =>{
    res.render("list", {users});
});

app.listen(3000);

