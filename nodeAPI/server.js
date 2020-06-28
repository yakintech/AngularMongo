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

const painter = mongoose.model("Painter",painterSchema);

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
    
})

app.listen(3000);