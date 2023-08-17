const express=require("express")
const app=express();
const port= process.env.PORT || 3000;
const path=require("path");
const hbs=require("hbs");
const paths=path.join(__dirname,"../public")
const temple=path.join(__dirname,"../views")
const partials=path.join(__dirname,"../partials")

 app.set("view engine","hbs");

 app.set("views",temple)
 hbs.registerPartials(partials);
app.use(express.static(paths));


app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404error')
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
}) 