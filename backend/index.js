import express from 'express'
import connectDB from './config/DB.js';
import cors from 'cors'
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './route/userRoute.js'
import completedprojectRoute from './route/completedprojectRoute.js'
import utilroute from './route/utils.js'
import inquiryroute from './route/Inquiryroute.js'
import Servicesroute from './route/Servicesroute.js'
import Industrialroute from './route/Industrialroute.js';
import Residentialroute from './route/Residentialroute.js';

dotenv.config({ path: './.env' }); 


const app = express()

const allowedOrigins = [
  'https://mern-project-rhiqntji6-tasveer-fatamas-projects.vercel.app',
  'https://mern-project-phi-henna.vercel.app'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      // Allow requests with no origin (like mobile apps or Postman)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(cors(corsOptions))
//db config
connectDB()
app.use(morgan("dev"))

//routes 
app.use('/api/v1/auth', userRoutes)
app.use('/completedProjects', completedprojectRoute)
app.use('/util', utilroute)
app.use('/inquiry', inquiryroute)
app.use('/services', Servicesroute)
app.use('/industrial', Industrialroute)
app.use('/residential', Residentialroute)
app.use(express.static('./static/uploads'));

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });


const port= process.env.PORT ||5000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    })



