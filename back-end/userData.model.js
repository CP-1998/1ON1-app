const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OneonOneUserData = new Schema({
  OneonOneUserData_type: {
    type: String
  },

  OneonOneUserData_premium: {
    type: Boolean
  },

  OneonOneUserData_online: {
    type: Boolean
  },

  OneonOneUserData_messages: {
    type: String
  }
});

let userData = new mongoose.model("UserData", OneonOneUserData)

module.exports = userData;