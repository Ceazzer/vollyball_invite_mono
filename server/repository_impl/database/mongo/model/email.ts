import mongoose from "mongoose";

const Schema = mongoose.Schema;
const EmailSchema = new Schema({

    to: {
        type: Schema.Types.Array,
        required: true,
    },
    
    from: {
        type: String,
        required: true,
    },
    
    subject: {
        type: String,
        required: true,
    },
    
    html: {
        type: String,
        required: true,
    },

    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
    },

    createdAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
});

export default mongoose.model("Email", EmailSchema);
