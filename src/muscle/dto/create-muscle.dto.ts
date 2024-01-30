import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMuscleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
