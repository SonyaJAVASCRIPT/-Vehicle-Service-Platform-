import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async createUser(username: string, email: string) {
    return this.prisma.user.create({
      data: { username: username, email: email },
    });
  }
  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
