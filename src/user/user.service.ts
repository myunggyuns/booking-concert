import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  signin() {
    return undefined;
  }
  signup(body) {
    console.log(body);
    return undefined;
  }
}
