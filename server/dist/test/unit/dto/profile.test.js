"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = __importDefault(require("../../../domain/dto/profile"));
describe("ProfileDTO", () => {
    const tests = [
        {
            name: "should create a profile dto",
            data: {
                id: "123",
                firstName: "test",
                lastName: "dev",
                email: "test.dev",
                emails: [
                    {
                        id: "123",
                        to: "test.dev",
                        subject: "test",
                        html: "this is a test",
                    },
                ],
            },
            expected: profile_1.default,
        },
        {
            name: "should create a profile from JSON",
            data: '{"firstName":"test","lastName":"dev","email":"test.dev","emails":[{"to":"test.dev","subject":"test","html":"this is a test"}]}',
            expected: profile_1.default,
        },
    ];
    tests.forEach((test) => {
        it(test.name, () => {
            if (typeof test.data === "string") {
                const profile = profile_1.default.fromJSON(test.data);
                expect(profile).toBeInstanceOf(test.expected);
                expect(profile).toEqual(JSON.parse(test.data));
                return;
            }
            if (typeof test.data === "object") {
                const profile = profile_1.default.fromObject(test.data);
                expect(profile).toBeInstanceOf(test.expected);
                expect(profile).toEqual(test.data);
                return;
            }
        });
    });
});
//# sourceMappingURL=profile.test.js.map