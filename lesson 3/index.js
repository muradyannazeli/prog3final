// console.log("Muradyan Nazeli")

// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

// function mna(){
//     console.log(os.platform());
// }
// mna();


// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");

// });
// app.get("/Nazeli", function(req, res){
//     res.send("Nazeli");
 
//  });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });



var express = require("express");
var app = express();
app.use(express.static("your_project_folder_name"));


app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});
app.get("/name/:Nazeli", function(req, res){
    var name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });
 app.listen(8888, function(){
    console.log("Example is running on port 8888");
 });
 