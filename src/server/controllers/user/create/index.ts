import { UserCreateUseCase } from "@modules/user";
import { UserService } from "@repository/user/user.service";
import { UserCreateController } from "./user.create.controller";

const userService = new UserService();

const userCreateUseCase = new UserCreateUseCase(userService);

const userCreateController = new UserCreateController(userCreateUseCase);

export { userCreateController };
