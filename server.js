const mongoose=require('mongoose');
const {MONGODB_URI, PORT } = require('./config/db');
const app = require('./app');
const express = require('express');
const authRouter = require('./routes/authRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
    }
));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/v1/auth',authRouter)
/*app.use('/api/v1/auth',authRouter.login)
app.use('/api/v1/auth',authRouter.logout)
app.use('/api/v1/auth',authRouter.me)
app.use('/api/v1/auth',authRouter.refresh)
app.use('/api/v1/auth',authRouter.forgotPassword)*/


mongoose.connect(MONGODB_URI)
.then(
    ()=>{
        console.log("DB CONNECTED SUCESSFULLY")
        app.listen(PORT,()=>{
            console.log(`Server run @ http://localhost:${PORT}`)
        })
    }

)
.catch((err)=>{console.log(err)})

