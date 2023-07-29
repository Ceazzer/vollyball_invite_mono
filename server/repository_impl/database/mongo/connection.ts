import type mongoose from "mongoose";
import type { IConfig } from "../../../config/config";

interface IConnection {
    client : mongoose.Mongoose;
    config: IConfig;
    options: mongoose.ConnectOptions;
}

function mongoConnection({client, config, options}: IConnection) {
    async function connectToMongo() {
        try {
            await client.connect(process.env.MONGO_URI, options);
        } catch (err) {
            console.error(`Mongoose Error: ${err}`);
        }

        console.log(`Connected to ${config.mongo.uri}`);

        client.connection.on("connected", (err) => {
            console.info(`Mongoose connected to ${config.mongo.uri}`);
        });

        client.connection.on("reconnected", (err) => {
            console.info(`Mongoose reconnected to ${config.mongo.uri}`);
        });

        client.connection.on("error", (err) => {
            console.error(`Mongoose connection error: ${err}`);
            client.disconnect();
        });

        client.connection.on("disconnected", (err) => {
            console.warn(`Mongoose disconnected!`);
        });
    }

    return {
        connectToMongo
    };
}

export type { IConnection };
export default mongoConnection;