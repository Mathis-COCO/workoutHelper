import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciceDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly exerciseName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly muscle_cible: string;
}
