import profileModel from "../../datasource/mongo/model/profile";
import ProfileDTO from "../dto/profile";
import Profile from "../entity/profile";

interface IProfileRepositoryMongo {
    createProfile: (profile: Profile) => Promise<ProfileDTO>;
}

interface IProfileRepositoryRedis {}

type ProfileRepository = IProfileRepositoryMongo | IProfileRepositoryRedis;;   

type ProfileRepositoryFunc = () => ProfileRepository;

export type {IProfileRepositoryMongo, IProfileRepositoryRedis, ProfileRepositoryFunc };

