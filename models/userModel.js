import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a Email Address"],
    unique: true,
  },
  img: {
    type: String,
  },

  yearOfJoining: {
    type: String,
  },

  about: {
    type: String,
    default: "",
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
// const User = mongoose.model("users", userSchema);

export default User;
