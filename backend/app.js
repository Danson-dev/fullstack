import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet";
import router from "./routes/product.route.js";

dotenv.config()
const app=express()

// middleware
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use("/api/products",router)

const PORT=process.env.PORT ||5000
app.get("/",(req,res)=>{
    res.send('welcome to mongodb duude')
})
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to the database");
//    app.listen(PORT,()=>{
//     console.log(`Server is running on port: http://localhost:${PORT}`);
    
// })
    
}).catch((error)=>{
    console.error(error);
    
})
export default app
/*
const app=express()

app.use(helmet())
 app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.get("/",router)
const port= process.env.port||5000
app.get("/",(req,res)=>{
    res.send("welcome to mongodb brutha")
})
mongoose.connect(process.env.MoONGODB_URI).then(()=>{
    console.log('connected to the database');
    app.listen(port,()=>{
        console.log(`Server is running on port:http://localhost:${port}`);
        
    })
    
})
*/



