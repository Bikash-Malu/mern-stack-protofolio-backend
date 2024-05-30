import mongoose from "mongoose"
const connnectMongoDb=()=>{
    mongoose.connect(process.env.MONDO_URL,{
        dbName:'PROTOFOLIO'
    }).then(()=>{
        console.log("connected")
    }).catch((error)=>{
        console.log(error.message)
    })
}
export default connnectMongoDb;