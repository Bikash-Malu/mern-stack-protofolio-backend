import mongoose from "mongoose"
const connnectMongoDb=()=>{
    mongoose.connect(process.env.MONGO_DB_URL, { 
        useNewUrlParser: true,
         
         useUnifiedTopology: true, }).then(()=>{
        console.log("connected")
    }).catch((error)=>{
        console.log(error.message)
    })
}
export default connnectMongoDb;