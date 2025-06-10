const mongoose = require("mongoose");
const ProfileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type:{
      type: String,
      required: true,
  },
  firm:{
      type: String,
      required: true,
  },
  brands:{
      type: String,
      required: true,
  },
  category:{
      type: String,
      required: true,
  },
  address:{
      type: String,
      required: true,
  },
  city:{
      type: String,
      required: true,
  }, 
  area:{
      type: String,
      required: true,
  },
  state:{
      type: String,
      required: true,
  },
  email:{
      type: String,
      required: true,
  },
  phone:{
      type:Number,
      required: true,
  }
});

const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;
