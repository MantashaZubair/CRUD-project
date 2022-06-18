import mongoose from "mongoose"


const connectdb = async(DATABASE_URL) =>{
    const db_OBJECT ={
        dbName:"school"
    }
    try{
         await mongoose.connect(DATABASE_URL,db_OBJECT);
        console.log("connection successfull")

    }catch (err){
        console.log(err)
    }
}
export default connectdb;