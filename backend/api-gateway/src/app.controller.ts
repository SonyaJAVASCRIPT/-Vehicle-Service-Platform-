import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.appService.createUser(body);
  }
}
