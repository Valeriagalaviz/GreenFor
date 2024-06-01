import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://valgreen:4192764358@cluster0.iqtulam.mongodb.net/greenfor-front').then(()=>console.log("DB Connected"));
}