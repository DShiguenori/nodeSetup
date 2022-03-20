import { IUser } from "./user.model";

export interface IUserRepository {
  create(params: { user: IUser }): Promise<IUser>;
}
