
import express from 'express';

interface IServerParams {
    app: express.Application;
}

interface IServer {
    startServer: () => void;
}

type ServerFunc = (params: IServerParams) => IServer;

function serverConfig({app}: IServerParams): IServer {
    function startServer() {
        const port = process.env.PORT || 3000;
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