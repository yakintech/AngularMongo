var app = require('express')();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://azra_elturco:1996417B@cluster417-vl3kd.mongodb.net/test?authSource=admin&replicaSet=Cluster417-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true
`, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const painterSchema = new Schema({
    fullname:String,
    country:String   
})

const categorySchema = new Schema({
    name:String,
    description:String
})

const painter = mongoose.model("Painter",painterSchema);
const category = mongoose.model("Category",categorySchema);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/api/painter/add",(req,res)=>{
    // var fullname = req.body.fullname;
    // var country = req.body.country;

    var pt = new painter({
        fullname:req.body.fullname,
        country:req.body.country
    });

    pt.save();

    res.json({msg:"OK"});
    
});

app.get("/api/painter/getall",(req,res)=>{
    painter.find({},(err,doc)=>{
        if(!err){
            res.json(doc);
        }
        else{
            res.json(err);
        }
    })
});

app.post("/api/painter/delete",(req,res)=>{
    var id = req.body.id;

    painter.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json({msg:"Success"});
        }
        else{
            res.json(err);
        }
    })
});

app.post("/api/category/add",(req,res)=>{
    var name = req.body.name;
    var desc = req.body.description;

    var ca = new category({
        name: name,
        description:desc
    });

    ca.save();

    res.send("Success!!");
})


app.get("/api/category/getall",(req,res)=>{
    category.find({},(err,doc)=>{
        if(!err){
            res.json(doc);
        }
        else{
            res.json(err);
        }
    })
})

app.listen(3000);