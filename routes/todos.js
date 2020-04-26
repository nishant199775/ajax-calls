const route=require("express").Router()
let list=[]
route.get("/",(req,res,next)=>
{

})
route.post("/",(req,res)=>
{
    list.push({
        task:req.body.task})
    res.send(list)
})
module.exports=route