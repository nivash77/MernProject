const mongoose= require('mongoose')
const mongourl= process.env.MONGO||"mongodb+srv://admin:admin@nivash.nrt23.mongodb.net/?retryWrites=true&w=majority&appName=nivash"
mongoose.connect(mongourl,{useNewUrlParser: true,useUnifiedTopology: true});
const conn=mongoose.connection;
conn.on('connected',()=>{
    console.log('DB connected');
})
conn.on('error',(err)=>{
    console.log('DB error:',err);
});
module.exports=mongoose;