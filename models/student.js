import mongoose from "mongoose"

const StudentSchema= new mongoose.Schema({
    name:{type:String , required: true,trim:true},
    age:{type:Number, required: true,min:18,max:65},
    fees:{type:mongoose.Decimal128 , validate:v =>v >=5000.50}

})

const StudentModel =mongoose.model('student',StudentSchema)

export default StudentModel;
   