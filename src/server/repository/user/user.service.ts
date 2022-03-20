// import { IUser } from "@logic/user/interfaces/user.model";
// import { IUserRepository } from "@logic/user/interfaces/user.repository";

import { IUserRepository, IUser } from "@modules/user";

export class UserService implements IUserRepository {
  async create(params: { user: IUser }): Promise<IUser> {
    const { user } = params;
    return user;
  }
}
