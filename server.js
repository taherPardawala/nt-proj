const express = require('express');
const app = express();
log = console.log;

app.use(require('body-parser').json());
app.use(require('cors')())
//app.use(express.static(__dirname));

app.listen(3000, err => {
    if (err) {
        log(err);
    } else {
        log('Server running');
    }
});

app.post('/login',async (req,res)=>{
    console.log(req.body);
    let result = await db.accounts.find({username:req.body.username,password:req.body.password},{username:1,accountType:1,_id:0}).toArray();
    if(result.length !== 0){
        log(result);
        res.json({ok:true,message:"Login successful",result:result});
    }else{
        res.json({ok:false,message:"Login Failed"});
    }
});

app.post('/registerUser',async (req,res)=>{
    console.log(req.body);
    let result = await db.users.insert({username:req.body.username,password:req.body.password,name:req.body.name,cardNum:req.body.cardNum,phoneNum:req.body.phoneNum,cvv:req.body.cvv});
    let result2 = await db.accounts.insert({username:req.body.username,password:req.body.password,accountType:10});
    if(result.result.ok==1 && result.result.n==1 && result2.result.ok==1 && result2.result.n==1){
        res.json({ok:true,message:"Registration successful"});
    }
    else{
        res.json({ok:false,message:"Registration Failed"});
    }
});

app.post('/registerAdmin',async (req,res)=>{
    console.log(req.body);
    let result = await db.accounts.find({username:req.body.username,password:req.body.password},{username:1,_id:0}).toArray();
    if(result.length !== 0){
        log(result);
        res.json({ok:true,message:"Login successful",username:result});
    }else{
        res.json({ok:false,message:"Login Failed"});
    }
});

module.exports = async () => {
    db = await require('./conn').connect();
}