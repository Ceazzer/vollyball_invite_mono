"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function mongoConnection({ mongoose, config, options }) {
    function connectToMongo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`Connecting to ${config.mongo.uri}`);
                yield mongoose.connect(config.mongo.uri, options);
            }
            catch (err) {
                console.error(`Mongoose Error: ${err}`);
                process.exit(1);
            }
            console.log(`Connected to ${config.mongo.uri}`);
            mongoose.connection.on("connected", (err) => {
                console.info(`Mongoose connected to ${config.mongo.uri}`);
            });
            mongoose.connection.on("reconnected", (err) => {
                console.info(`Mongoose reconnected to ${config.mongo.uri}`);
            });
            mongoose.connection.on("error", (err) => {
                console.error(`Mongoose connection error: ${err}`);
                mongoose.disconnect();
            });
            mongoose.connection.on("disconnected", (err) => {
                console.warn(`Mongoose disconnected!`);
            });
        });
    }
    return {
        connectToMongo
    };
}
exports.default = mongoConnection;
//# sourceMappingURL=connection.js.map