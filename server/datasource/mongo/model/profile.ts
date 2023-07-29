import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
    updatedAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },

});

const profileModel = mongoose.model("Profile", ProfileSchema);
export default profileModel;