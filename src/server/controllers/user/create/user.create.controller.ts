import { UserCreateUseCase } from "@modules/user/useCases/create/user.create.useCase";

export class UserCreateController {
  constructor(private userCreateUseCase: UserCreateUseCase) {}
  async handle() {}
}
