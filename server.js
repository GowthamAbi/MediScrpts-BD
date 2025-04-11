const mongoose=require('mongoose');
const {MONGODB_URI, PORT } = require('./config/db');
const app = require('./app');

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

