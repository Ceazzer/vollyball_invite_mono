"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
const profileModel = mongoose_1.default.model("Profile", ProfileSchema);
exports.default = profileModel;
//# sourceMappingURL=profile.js.map