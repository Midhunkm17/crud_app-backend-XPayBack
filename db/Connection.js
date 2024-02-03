const mongoose=require('mongoose')

const connectionString=process.env.MONGO

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Connected..!!");
}).catch((err)=>{
console.log(`MongoDB Connection Failed!! ${err}`);
})