import mongoose from "mongoose";

const FlexComponentSchema = new mongoose.Schema(
    {
        LTA: { type: String, required: true },
        TelephoneR: { type: String, required: true },
        FuelA	: { type: String, required: true },
        Books	: { type: String, required: true },
        email: { type: String, required: true, unique:true },

    },
    { timestamps: true }
);

export default mongoose.model("flexComponent", FlexComponentSchema);
