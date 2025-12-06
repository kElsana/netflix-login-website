const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())

var email ="joel123@gmail.com"
var password = 123

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res){
    console.log(req.body.email);
    console.log(req.body.password);

    const userEmail =req.body.email
    const userPass = Number(req.body.password)
    if(userEmail === email && userPass === password){   
        return res.json({ success:true })
    }
    // email:email, password:password 

    if(userEmail !== email ){   
        return res.json({ success:false, message:"email wrong" })
    }
    if(userPass !== password ){   
        return res.json({ success:false, message:"password wrong" })
    }
    
    
})

app.listen(PORT, function(){
    console.log(`server started ${PORT}...`)
})