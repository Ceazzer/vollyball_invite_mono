interface IEmailData {
    id: string;
    to: string[] | string;
    subject: string;
    html: string;    
}

interface Email extends IEmailData {
    profileId?: string;
    createdAt?: number;
}

class Email {
    constructor(data: IEmailData) {
        Object.assign(this, data);
    }

    toObject() {
        return { ...this };
    }

    toJSON() {
        return JSON.stringify(this.toObject());
    }

    toString() {
        return this.toJSON();
    }

    static fromJSON(json: string) {
        return new Email(JSON.parse(json));
    }

    static fromObject(object: IEmailData) {
        return new Email(object);
    }
}

export type { IEmailData, Email };
export default Email;