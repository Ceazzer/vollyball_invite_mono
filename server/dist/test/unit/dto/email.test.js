"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = __importDefault(require("../../../domain/dto/email"));
describe("EmailDTO", () => {
    const tests = [
        {
            name: "should create an email dto",
            data: {
                id: "123",
                to: "test.dev",
                subject: "test",
                html: "this is a test",
                profile: {
                    id: "123",
                    firstName: "test",
                    lastName: "dev",
                    email: "test.dev",
                },
            },
            expected: email_1.default,
        },
        {
            name: "should create an email from JSON",
            data: '{"to":"test.dev","subject":"test","html":"this is a test","profile":{"firstName":"test","lastName":"dev","email":"test.dev"}}',
            expected: email_1.default,
        },
    ];
    tests.forEach((test) => {
        it(test.name, () => {
            if (typeof test.data === "string") {
                const email = email_1.default.fromJSON(test.data);
                expect(email).toBeInstanceOf(test.expected);
                expect(email).toEqual(JSON.parse(test.data));
                return;
            }
            if (typeof test.data === "object") {
                const email = email_1.default.fromObject(test.data);
                expect(email).toBeInstanceOf(test.expected);
                expect(email).toEqual(test.data);
                return;
            }
        });
    });
});
//# sourceMappingURL=email.test.js.map