/* eslint-disable require-jsdoc */
import { UserCreateUseCase } from '@modules/user/useCases/create/user.create.useCase';

export class UserCreateController {
	constructor(private userCreateUseCase: UserCreateUseCase) {}

	async handle(): Promise<void> {
		console.log('teste');
	}
}
