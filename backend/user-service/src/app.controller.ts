import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
type User = {
  username: string;
  email: string;
};
@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @EventPattern('USER_CREATED')
  async handleUserCreated(@Payload() data: User) {
    await this.appService.createUser(data.username, data.email);
  }
}
