import mongoose from "mongoose"
const connnectMongoDb=async()=>{
    try {
        await mongoose.connect("mongodb+srv://210301120093:jxQFnrQe4dgDpBZG@cluster0.rfoa62y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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