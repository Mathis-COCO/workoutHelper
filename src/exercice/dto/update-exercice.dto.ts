import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciceDto } from './create-exercice.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateExerciceDto extends PartialType(CreateExerciceDto) {
  @IsString({ message: 'wrong format' })
  @IsNotEmpty({ message: 'input is empty' })
  @ApiProperty()
  readonly nom_exercice: string;

  @IsString({ message: 'wrong format' })
  @IsNotEmpty({ message: 'input is empty' })
  @ApiProperty()
  readonly muscle_cible: string;
}
