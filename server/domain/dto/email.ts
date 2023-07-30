import { IEmailData } from "../entity/email";
import { IProfileData } from "../entity/profile";

interface IEmailDataDTO extends IEmailData {}

interface EmailDTO extends IEmailDataDTO {
    profile?: IProfileData
}

class EmailDTO {
    constructor(data: IEmailDataDTO) {
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
        return new this(JSON.parse(json));
    }

    static fromObject(object: IEmailDataDTO) {
        return new this(object);
    }
}

export type { IEmailDataDTO, EmailDTO };
export default EmailDTO;