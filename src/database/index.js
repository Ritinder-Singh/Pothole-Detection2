import mongoose from "mongoose";

// const mongo_url = "mongodb+srv://admin:admin@cluster0.rysalpm.mongodb.net/?retryWrites=true&w=majority";
const mongo_url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1";

 const connectToDB = async () => {
  try {
    await mongoose.connect(mongo_url);

    // console.log("Connected to mongodb");

  } catch (error) {

    console.log(error);
    
  }
};

export default connectToDB;

