import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciceDto {
  @IsString({ message: 'wrong format' })
  @IsNotEmpty({ message: 'input is empty' })
  @ApiProperty()
  readonly nom_exercice: string;

  @IsString({ message: 'wrong format' })
  @IsNotEmpty({ message: 'input is empty' })
  @ApiProperty()
  readonly muscle_cible: string;
}
