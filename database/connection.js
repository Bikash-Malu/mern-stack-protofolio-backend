import mongoose from "mongoose"
const connnectMongoDb=async()=>{
    try {
        await mongoose.connect("mongodb+srv://bikashpage:8To7YI610MX0oYlA@cluster0.2jn7key.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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