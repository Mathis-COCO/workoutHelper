import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UsersDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'username',
    required: true,
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'password',
    required: true,
  })
  password: string;
}
