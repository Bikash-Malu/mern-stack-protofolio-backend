import mongoose from "mongoose"
const connnectMongoDb=async()=>{
    try {
        await mongoose.connect("mongodb+srv://210301120093:tcmavmIfEFcfLrb6@cluster0.rfoa62y.mongodb.net/test?retryWrites=true&w=majority", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        console.log("db connected")
        
      }
      catch (error) {
        console.error(error);
      }
}
export default connnectMongoDb;