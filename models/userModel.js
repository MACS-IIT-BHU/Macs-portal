import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a Email Address"],
    unique: true,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },

  yearOfJoining: {
    type: String,
  },

  about: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  skills: {
    type: String,
  },
  resume: {
    type: String,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
// const User = mongoose.model("users", userSchema);

export default User;
