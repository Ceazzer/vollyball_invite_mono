import type Email from "../entity/email";

interface IEmailRepositoryResend {
    sendEmail: (email: Email) => Promise<void>;
}

type EmailRepository = IEmailRepositoryResend;

type EmailRepositoryFunc = () => EmailRepository;

export type { IEmailRepositoryResend, EmailRepositoryFunc };

