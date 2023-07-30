import ProfileModel from "../model/profile";

import type Profile from "../../../domain/entity/profile";

interface IProfileRepository {
    createProfile: (profile: Profile) => Promise<Profile>;
}

type profileRepositoryFunc = () => IProfileRepository;

function profileRepository(): IProfileRepository {
    const createProfile = async (profile: Profile) => {
        const newProfile = new ProfileModel(
            profile.toObject()
        );
         await newProfile.save();
        return newProfile.toObject({ getters: true}) as Profile;
    }

    return {
        createProfile
    };
}

export type { profileRepositoryFunc };
export default profileRepository;