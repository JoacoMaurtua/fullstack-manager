const mongoose = require('mongoose');

const dataBase = process.env.DB;

const connect = async() =>{
  try{
      await mongoose.connect(dataBase,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

      console.log(`2: Established connection with DB`)
  }catch(err){
      console.error(err);
  }

}

module.exports = connect;