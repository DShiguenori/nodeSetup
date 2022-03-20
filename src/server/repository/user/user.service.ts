/* eslint-disable require-jsdoc */
import { IUserRepository, IUser } from '@modules/user';

export class UserService implements IUserRepository {
	async create(params: { user: IUser }): Promise<IUser> {
		const { user } = params;
		return user;
	}
}
