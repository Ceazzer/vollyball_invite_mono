
interface IConfig {
    port: string;
    ip: string;
    mongo: {
        uri: string;
    };
    resend: {
        key: string;
        from: string;
    };
}

const config: IConfig =  {
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

export type { IConfig };
export default config;