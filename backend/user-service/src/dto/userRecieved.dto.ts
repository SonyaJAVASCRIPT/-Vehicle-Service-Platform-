import { IsEmail, IsNotEmpty } from 'class-validator';

export class RecieveUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  username: string;
}
