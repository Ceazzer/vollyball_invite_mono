
import express from 'express';
import { IConfig } from './config';

interface IServerParams {
    app: express.Application;
    config: IConfig
}

interface IServer {
    startServer: () => void;
}

function serverConfig({app, config}: IServerParams): IServer {
    function startServer() {
        const port = +config.port;
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }

    return {
        startServer
    };
}

export type { IServerParams, IServer };
export default serverConfig;