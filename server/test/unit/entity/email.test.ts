import Email from "../../../domain/entity/email";

describe("Email", () => {
    const tests = [
        {
            name: "should create an email",
            data: {
                to: "test.dev",
                from: "from.dev",
                subject: "test",
                html: "this is a test",
            },
            expected: Email,
        },
        {
            name: "should create an email from JSON",
            data: "{\"to\":\"test.dev\",\"from\":\"from.dev\",\"subject\":\"test\",\"html\":\"this is a test\"}",
            expected: Email,
        },
    ];

    tests.forEach((test) => {
        it(test.name, () => {
            if (typeof test.data === "string") {
                const email = Email.fromJSON(test.data);
                expect(email).toBeInstanceOf(test.expected);
                return;
            }

            if (typeof test.data === "object") {
                const email = Email.fromObject(test.data);
                expect(email).toBeInstanceOf(test.expected);
                return;
            }
        });
    });
});