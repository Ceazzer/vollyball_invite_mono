import { profileRepositoryFunc } from "../../datasource/mongo/repository/profile_repository";
import ProfileDTO from "../../domain/dto/profile";
import Profile, { IProfileData } from "../../domain/entity/profile";

interface ICreateProfileParams {
    profileData: IProfileData;
    profileRepository: profileRepositoryFunc;
}

type CreateProfileFunc = (params: ICreateProfileParams) => Promise<IProfileData>;


async function createProfile({profileData, profileRepository}: ICreateProfileParams): Promise<ProfileDTO> {
    const profile = Profile.fromObject(profileData);
    return ProfileDTO.fromObject(
        await profileRepository().createProfile(profile)
    ); 
}

export type { CreateProfileFunc };
export default createProfile;