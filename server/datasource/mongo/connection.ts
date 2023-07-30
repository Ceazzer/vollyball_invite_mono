import type mongoose from "mongoose";
import type { IConfig } from "../../config/config";

interface IConnection {
    mongoose : mongoose.Mongoose;
    config: IConfig;
    options: mongoose.ConnectOptions;
}

function mongoConnection({mongoose, config, options}: IConnection) {
    async function connectToMongo() {
        try {
            console.log(`Connecting to ${config.mongo.uri}`);
            await mongoose.connect(config.mongo.uri, options);
        } catch (err) {
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
    }

    return {
        connectToMongo
    };
}

export type { IConnection };
export default mongoConnection;