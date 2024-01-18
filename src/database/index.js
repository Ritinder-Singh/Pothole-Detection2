import mongoose from "mongoose";

// const mongo_url = "mongodb+srv://admin:admin@cluster0.rysalpm.mongodb.net/?retryWrites=true&w=majority";
const mongo_url = "";

 const connectToDB = async () => {
  try {
    await mongoose.connect(mongo_url);

    // console.log("Connected to mongodb");

  } catch (error) {

    console.log(error);
    
  }
};

export default connectToDB;

