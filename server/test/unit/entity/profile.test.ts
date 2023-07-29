import Profile from '../../../domain/entity/profile';

describe('Profile', () => {
    const tests = [
        {
            name: 'should create a profile',
            data: {
                id: '123',
                firstName: 'test',
                lastName: 'dev',
                email: 'test.dev',
            },
            expected: Profile,
        },
        {
            name: 'should create a profile from JSON',
            data: '{"firstName":"test","lastName":"dev","email":"test.dev"}',
            expected: Profile,
        },
    ];

    tests.forEach((test) => {
        it(test.name, () => {
            if (typeof test.data === 'string') {
                const profile = Profile.fromJSON(test.data);
                expect(profile).toBeInstanceOf(test.expected);
                expect(profile).toEqual(JSON.parse(test.data));
                return;
            }

            if (typeof test.data === 'object') {
                const profile = Profile.fromObject(test.data);
                expect(profile).toBeInstanceOf(test.expected);
                expect(profile).toEqual(test.data);
                return;
            }
        });
    });
});