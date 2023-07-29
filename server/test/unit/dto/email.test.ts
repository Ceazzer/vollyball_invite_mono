import EmailDTO from "../../../domain/dto/email";

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
            expected: EmailDTO,
        },
        {
            name: "should create an email from JSON",
            data: '{"to":"test.dev","subject":"test","html":"this is a test","profile":{"firstName":"test","lastName":"dev","email":"test.dev"}}',
            expected: EmailDTO,
        },
    ];

    tests.forEach((test) => {
        it(test.name, () => {
            if (typeof test.data === "string") {
                const email = EmailDTO.fromJSON(test.data);
                expect(email).toBeInstanceOf(test.expected);
                expect(email).toEqual(JSON.parse(test.data));
                return;
            }

            if (typeof test.data === "object") {
                const email = EmailDTO.fromObject(test.data);
                expect(email).toBeInstanceOf(test.expected);
                expect(email).toEqual(test.data);
                return;
            }
        });
    });
});