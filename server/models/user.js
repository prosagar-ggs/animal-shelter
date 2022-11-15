const mongoose=require('mongoose');
const userSchema=new mongoose.Schema(
    {
        pettype:{
            type:String,
            required:true
        },
        breed:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        mobilenumber:{
            type: Number,
            required:true
        }
    }
)
mongoose.model("User", userSchema);