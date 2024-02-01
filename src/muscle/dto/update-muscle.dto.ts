import { PartialType } from '@nestjs/mapped-types';
import { CreateMuscleDto } from './create-muscle.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateMuscleDto extends PartialType(CreateMuscleDto) {
  @ApiProperty()
  @IsString({ message: 'wrong format' })
  @IsNotEmpty({ message: 'input is empty' })
  readonly muscle_name: string;
}
