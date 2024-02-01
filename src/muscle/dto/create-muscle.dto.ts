import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMuscleDto {
  @ApiProperty()
  @IsString({ message: 'wrong format' })
  @IsNotEmpty({ message: 'input is empty' })
  readonly muscle_name: string;
}
