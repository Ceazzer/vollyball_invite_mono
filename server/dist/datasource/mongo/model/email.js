"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model("Email", EmailSchema);
//# sourceMappingURL=email.js.map