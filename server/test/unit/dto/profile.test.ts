import ProfileDTO from "../../../domain/dto/profile";

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
            expected: ProfileDTO,
        },
        {
            name: "should create a profile from JSON",
            data: '{"firstName":"test","lastName":"dev","email":"test.dev","emails":[{"to":"test.dev","subject":"test","html":"this is a test"}]}',
            expected: ProfileDTO,
        },
    ];

    tests.forEach((test) => {
        it(test.name, () => {
            if (typeof test.data === "string") {
                const profile = ProfileDTO.fromJSON(test.data);
                expect(profile).toBeInstanceOf(test.expected);
                expect(profile).toEqual(JSON.parse(test.data));
                return;
            }

            if (typeof test.data === "object") {
                const profile = ProfileDTO.fromObject(test.data);
                expect(profile).toBeInstanceOf(test.expected);
                expect(profile).toEqual(test.data);
                return;
            }
        });
    });
});