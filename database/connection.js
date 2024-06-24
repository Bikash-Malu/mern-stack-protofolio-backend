import mongoose from "mongoose"
const connnectMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONDO_URL, {
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