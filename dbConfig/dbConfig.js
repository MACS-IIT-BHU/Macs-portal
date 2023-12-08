import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected");
    });

    connection.on("error", (err) => {
      console.log("Error while connecting to Mongo");
      console.log(err);
      process.exit();
    });
  } catch (err) {
    console.log("Something went wrong!", err);
  }
}
