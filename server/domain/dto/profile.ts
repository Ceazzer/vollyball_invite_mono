import { IEmailData } from "../entity/email";
import { IProfileData } from "../entity/profile";

interface IProfileDTO extends IProfileData {
    emails: IEmailData[];
}

interface ProfileDTO extends IProfileDTO {}

class ProfileDTO {
    constructor(data: IProfileDTO) {
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

    static fromObject(object: IProfileDTO) {
        return new this(object);
    }
}

export type { IProfileDTO, ProfileDTO };
export default ProfileDTO;