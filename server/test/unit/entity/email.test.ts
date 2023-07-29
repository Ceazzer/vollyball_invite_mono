import Email from "../../../domain/entity/email";

describe("Email", () => {
    const tests = [
        {
            name: "should create an email",
            data: {
                id: "123",
                to: "test.dev",
                subject: "test",
                html: "this is a test",
            },
            expected: Email,
        },
        {
            name: "should create an email from JSON",
            data: '{"to":"test.dev","subject":"test","html":"this is a test"}',
            expected: Email,
        },
    ];

    tests.forEach((test) => {
        it(test.name, () => {
            if (typeof test.data === "string") {
                const email = Email.fromJSON(test.data);
                expect(email).toBeInstanceOf(test.expected);
                expect(email).toEqual(JSON.parse(test.data));
                return;
            }

            if (typeof test.data === "object") {
                const email = Email.fromObject(test.data);
                expect(email).toBeInstanceOf(test.expected);
                expect(email).toEqual(test.data);
                return;
            }
        });
    });
});