import mongoose from "mongoose";

const eventModel = new mongoose.Schema(
    {
        eventContent: {
            type: String,
        },
        title: {
            type: String,
        },
        date: {
            type: String,
        },
    },
    { timestamps: true }
);

const Event = mongoose.models.events || mongoose.model("events", eventModel);
// const User = mongoose.model("users", userSchema);

export default Event;
