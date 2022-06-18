import StudentModel from "../models/student.js"
class StudentControllers {

    static createDoc=async(req,res)=>{
        try{
            const {name,age,fees}=req.body
            const doc = new StudentModel({
                name:name,
                age:age,
                fees:fees
            })
            const result= await doc.save()
            res.redirect("/student")
        }catch(err){
            console.log(err)
        }
        
    }
    static getAllDoc= async (req,res)=>{
        try{
            const result = await StudentModel.find()
            console.log(result)
            res.render('index', {data: result})
        }catch(err){
            console.log(err)
        }
        
    }
    static editDoc= async(req,res)=>{
        // console.log(req.params.id)
        // res.render('edit')
         try{
             const result= await StudentModel.findById(req.params.id);
             console.log(result)
             res.render('edit', {data:result})
         }catch(err){
             console.log(err)
         }
       
    }
    static updateDocById= async(req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result=await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/student')
        }catch(err){
            console.log(err)
        }
       
    }
    static deleteDocById= async(req,res)=>{
        try{
            const result=await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect('/student')
        }catch(err){
            console.log(err)
        }
        
    }
}

export default StudentControllers 

