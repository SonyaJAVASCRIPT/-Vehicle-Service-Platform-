import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { RecieveUserDto } from './dto/userRecieved.dto';
@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @EventPattern('USER_CREATED')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  async handleUserCreated(@Payload() data: RecieveUserDto) {
    await this.appService.createUser(data.username, data.email);
  }
}
