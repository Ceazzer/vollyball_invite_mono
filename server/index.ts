import 'dotenv/config';
import express from 'express';
import serverConfig from './config/server';
import config from './config/config';
import expressConfig from './config/express';
import mongoConnection from './datasource/mongo/connection';
import mongoose from 'mongoose';

const app = express();

expressConfig(app);

const options = {
    autoIndex: false,
  useNewUrlParser: true,
  connectTimeoutMS: 1000,
} as mongoose.ConnectOptions;

mongoConnection({mongoose, config, options}).connectToMongo();

serverConfig({app, config}).startServer();

export default app;