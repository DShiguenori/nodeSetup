/* eslint-disable require-jsdoc */
import { IUser, IUserRepository } from '@modules/user';

export class UserServiceMock implements IUserRepository {
	async create(params: { user: IUser }): Promise<IUser> {
		const { user } = params;
		return user;
	}
}
