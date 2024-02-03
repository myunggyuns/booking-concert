import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() { email, password, nickname }) {
    return this.userService.signup({ email, password, nickname });
  }
}
