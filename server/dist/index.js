"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./config/server"));
const config_1 = __importDefault(require("./config/config"));
const express_2 = __importDefault(require("./config/express"));
const connection_1 = __importDefault(require("./datasource/mongo/connection"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
(0, express_2.default)(app);
const options = {
    autoIndex: false,
    useNewUrlParser: true,
    connectTimeoutMS: 1000,
};
(0, connection_1.default)({ mongoose: mongoose_1.default, config: config_1.default, options }).connectToMongo();
(0, server_1.default)({ app, config: config_1.default }).startServer();
exports.default = app;
//# sourceMappingURL=index.js.map