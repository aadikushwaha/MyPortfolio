const mongoose = require('mongoose');
const DB_Connect = async (DB_NAME,DB_URL)=>{
    try {
        await mongoose.connect(DB_URL+DB_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
        console.log("The database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = DB_Connect
