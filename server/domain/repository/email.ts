import type Email from "../entity/email";

interface IParams {
    email?: Email;
    id?: string;
}

interface IEmailRepository {
    sendEmail: (params: IParams) => Promise<void>;
}

type EmailRepositoryFunc = () => IEmailRepository;

export type { IParams, IEmailRepository, EmailRepositoryFunc };

