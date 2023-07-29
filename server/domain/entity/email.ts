interface IEmailData {
    to: string;
    from: string;
    subject: string;
    text: string;
}

interface Email extends IEmailData {}

class Email {
    constructor(data: IEmailData) {
        Object.assign(this, data);
    }

    toObject() {
        return { ...this };
    }
}

export type { IEmailData, Email };
export default Email;