import profileModel from "../../repository_impl/database/mongo/model/profile";
import ProfileDTO from "../dto/profile";
import Profile from "../entity/profile";

interface IProfileRepository {
    createProfile: (profile: Profile) => Promise<ProfileDTO>;
}

type ProfileRepositoryFunc = () => IProfileRepository;

export type { IProfileRepository, ProfileRepositoryFunc };

