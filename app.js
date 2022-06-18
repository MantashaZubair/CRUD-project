import express from "express";
//var bodyParser = require('body-parser')
import {join} from "path";
import web from "./routes/web.js"
const app = express();
import connectdb from "./db/connectdb.js"
const port = process.env.PORT||"3000";

const DATABASE_URL=process.env.DATABASE_URL||"mongodb://localhost:27017";
connectdb(DATABASE_URL);
app.use(express.urlencoded({extended:false}))

app.set('view engine',"ejs")

app.use('/student', express.static(join(process.cwd(),'public')))
app.use('/student/edit', express.static(join(process.cwd(),'public')))
app.use('/student',web)





app.listen(port, ()=>{
    console.log(`server listing at http://localhost:${port}`)
})