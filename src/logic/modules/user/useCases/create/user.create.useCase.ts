import { IUserRepository, IUser } from "@modules/user/interfaces";
import { IUserCreateDTO } from "./user.create.DTO";

export class UserCreateUseCase {
  constructor(private userRepository: IUserRepository) {}
  async exec(dto: IUserCreateDTO): Promise<IUser> {
    const { user } = dto;
    return await this.userRepository.create({ user });
  }
}
