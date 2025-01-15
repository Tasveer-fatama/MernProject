import mongoose from "mongoose"

const url="mongodb+srv://BuildingSolutions:12345Building12345@cluster0.k1njd.mongodb.net/BuildingSolutions?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () =>{
try {
     // Debugging output
    //  console.log("Mongo URL:", process.env.MONGO_URL) ;
    const connect = await mongoose.connect(url);
    console.log(
        `Connection To MongoDB Data ${connect.connection.host}`
    );
} catch (error) {
   console.log(`Error in Mongodb${error}`);
    
}
    
}

export default connectDB