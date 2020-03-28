const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
let isConnected;

const connect = (async = () => {
  
    .connect(process.env.DB)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch(err => console.error(err));
});

module.exports = connect;
