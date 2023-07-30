"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serverConfig({ app, config }) {
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
exports.default = serverConfig;
//# sourceMappingURL=server.js.map