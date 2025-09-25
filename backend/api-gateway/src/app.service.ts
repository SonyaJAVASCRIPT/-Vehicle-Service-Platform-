import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) {}
  async createUser(userdata: CreateUserDto) {
    await this.userClient
      .emit('USER_CREATED', {
        username: userdata.username,
        email: userdata.email,
      })
      .toPromise();
    return `user is created: ${userdata.username} ${userdata.email}`;
  }
}
