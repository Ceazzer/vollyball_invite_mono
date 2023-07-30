"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    constructor(data) {
        Object.assign(this, data);
    }
    toObject() {
        return Object.assign({}, this);
    }
    toJSON() {
        return JSON.stringify(this.toObject());
    }
    toString() {
        return this.toJSON();
    }
    static fromJSON(json) {
        return new this(JSON.parse(json));
    }
    static fromObject(object) {
        return new this(object);
    }
}
exports.default = Profile;
//# sourceMappingURL=profile.js.map