import mongoose from "mongoose";

const blogModel = new mongoose.Schema(
  {
    blogContent: {
      type: String,
    },
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    writer: {
      type: String,
    },
    readtime: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogModel);
// const User = mongoose.model("users", userSchema);

export default Blog;
