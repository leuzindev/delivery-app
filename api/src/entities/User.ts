

export interface IUser {

    id: string;
    username: string;
    email: string;
    password: string;
    isAdm ?: boolean;
    createdAt: Date;
    updatedAt: Date;
}