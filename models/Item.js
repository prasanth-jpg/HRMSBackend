import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  email: { type: String, required: true, unique:true },

}, { timestamps: true });

export default mongoose.model("Item", ItemSchema);
