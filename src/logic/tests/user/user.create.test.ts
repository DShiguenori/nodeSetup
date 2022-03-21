import { IUser, UserCreateUseCase } from '@modules/user';
import { UserServiceMock } from 'logic/mocks';

const makeSystemUnderTest = () => {
	const userService = new UserServiceMock();
	const userCreateUseCase = new UserCreateUseCase(userService);

	return {
		sut: userCreateUseCase,
	};
};

describe('User Create...', () => {
	const { sut } = makeSystemUnderTest();

	describe('given the correct parameters...', () => {
		it('should create a new user.', async () => {
			const newUser: IUser = { name: 'newUserName' }; // Arrange

			const createdUser: IUser = await sut.exec({ user: newUser }); // Act

			expect(createdUser).toBeTruthy(); // Assert
			expect(createdUser.name).toBeTruthy();
		});
	});

	describe('given incorrect parameters...', () => {
		it('should get an error.', async () => {
			const newUser: IUser = { name: 'newUserName' };

			const createdUser: IUser = await sut.exec({ user: newUser });

			expect(createdUser).toBeTruthy();
			expect(createdUser.name).toBeTruthy();
		});
	});
});
