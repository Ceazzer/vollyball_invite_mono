"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
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
        return new Email(JSON.parse(json));
    }
    static fromObject(object) {
        return new Email(object);
    }
}
exports.default = Email;
//# sourceMappingURL=email.js.map