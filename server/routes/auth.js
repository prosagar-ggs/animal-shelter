const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')



router.post("/giveaway",(req,res)=>{
    const {pettype,breed,name,email,mobilenumber} =req.body
    if (!pettype || !breed || !name || !email || !mobilenumber) {
        return res.status(422).json({ error: "Please add all the fields"})
    }
    const user=new User({
        pettype,
        breed,
        name,
        email,
        mobilenumber
    })
    user.save()
    .then(result=>{
        res.json({post:result })
    }).catch(
            err=>{
                console.log(err)
            }
        )

}    
)

router.post("/adopt",(req,res)=>{
    const {pettype,breed,name,email,mobilenumber} =req.body
    if (!pettype || !breed || !name || !email || !mobilenumber) {
        return res.status(422).json({ error: "Please add all the fields"})
    }
    const user=new User({
        pettype,
        breed,
        name,
        email,
        mobilenumber
    })
    user.save()
        .then((user) => {
            res.json({ message: "Adopt form submitted successfully" })
        }
        )
        .catch(
            err=>{
                console.log(err)
            }
        )

}    
)
module.exports = router