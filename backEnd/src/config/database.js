const mongoose=require("mongoose");;

const connectbDb=async()=>{
    // await mongoose.connect("mongodb://localhost:27017/devBaba")
    await mongoose.connect("mongodb+srv://theashutosh96:MM6IMakdushnO7Xh@cluster0.oxc8t7f.mongodb.net/devTinder")
}



module.exports=connectbDb;