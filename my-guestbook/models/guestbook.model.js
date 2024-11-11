import mongoose from "mongoose";

const guestbookSchema = new mongoose.Schema({
    author: { type: String, required: true }, 
    message: { type: String, required: true },
    createdAt: { type: Date , default: Date.now },
});

const GuestBook = mongoose.model("GuestBook", guestbookSchema);

export default GuestBook;