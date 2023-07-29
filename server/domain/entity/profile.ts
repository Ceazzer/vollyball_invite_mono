interface IProfileData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

interface Profile extends IProfileData {
    createdAt?: number;
    updatedAt?: number;
}

class Profile {
    constructor(data: IProfileData) {
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

    static fromObject(object: IProfileData) {
        return new this(object);
    }
}

export type { IProfileData, Profile };
export default Profile;