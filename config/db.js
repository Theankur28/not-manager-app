import mongoose from "mongoose";

const URI = `mongodb://0.0.0.0:27017/-note-manager-app`


const connectToMongo = async () => {
    const res = await mongoose.connect(URI);
    try{
        if(res){
            console.log("Database Connected Successfully!");
        }
    } catch(error){
        console.log(error);
    }
}

export default connectToMongo;