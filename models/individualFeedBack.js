import mongoose from "mongoose";

const IndividualFeedBackSchema = new mongoose.Schema(
    {
        CommunicationSkill: { type: String, required: true },
        frameWork: { type: String, required: true },
        Javascript: { type: String, required: true },
        css: { type: String, required: true },
        codeSnipet: { type: String, required: true },
        coding: { type: String, required: true },
        overall: { type: String, required: true },
        email: { type: String, required: true, unique:true },


    },
    { timestamps: true }
);

export default mongoose.model("individualFeedBack", IndividualFeedBackSchema);
