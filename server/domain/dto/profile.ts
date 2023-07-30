import { IEmailData } from "../entity/email";
import { IProfileData } from "../entity/profile";

interface IProfileDataDTO extends IProfileData {}

interface ProfileDTO extends IProfileDataDTO {
    emails?: IEmailData[];
}

class ProfileDTO {
    constructor(data: IProfileDataDTO) {
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

    static fromObject(object: IProfileDataDTO) {
        return new this(object);
    }
}

export type { IProfileDataDTO, ProfileDTO };
export default ProfileDTO;