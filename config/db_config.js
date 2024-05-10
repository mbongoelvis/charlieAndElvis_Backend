const mongoose = require("mongoose");

const connect_db = async (url) => {
  try {
    const db = await mongoose.connect(url);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect_db;
