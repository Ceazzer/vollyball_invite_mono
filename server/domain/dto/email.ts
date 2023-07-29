import { IEmailData } from "../entity/email";
import { IProfileData } from "../entity/profile";

interface IEmailDataDTO extends IEmailData {
    profile: IProfileData
}

interface EmailDataDTO extends IEmailDataDTO {}

class EmailDataDTO {
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