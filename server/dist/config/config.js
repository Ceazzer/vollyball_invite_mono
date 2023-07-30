"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT || '3500',
    ip: process.env.IP || '0.0.0.0',
    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/vollyball-invite'
    },
    resend: {
        key: process.env.RESEND_KEY || 'resend',
        from: process.env.RESEND_FROM || 'test.dev'
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map