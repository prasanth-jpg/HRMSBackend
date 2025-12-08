import mongoose from "mongoose";

const ITDeclarationsSchema = new mongoose.Schema(
    {
        ITDECLARATION: { type: String, required: true },
        POI: { type: String, required: true },
        email: { type: String, required: true, unique:true },

    },
    { timestamps: true }
);

export default mongoose.model("iTDeclarations", ITDeclarationsSchema);
