import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('User Service Test', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('userTest', () => {
    it('1+1 = 2', () => {
      expect(2).toBe(2);
    });

    it('signup test', () => {
      userController.signup({
        email: '11@11.com',
        password: '1234',
        nickname: 'ppp',
      });
    });
  });
});
