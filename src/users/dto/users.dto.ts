import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UsersDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'john',
    required: true,
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'changeme',
    required: true,
  })
  password: string;
}
