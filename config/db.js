const mongoose = require('mongoose');


const connectDB = async () => {
   try {
  const conn = await  mongoose.connect(process.env.MONGO_URI)
    console.log('connected to db');
   } catch (error) {
    console.log(error)
   }
}

module.exports = connectDB;