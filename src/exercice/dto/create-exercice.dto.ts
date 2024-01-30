import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciceDto {
  @IsString()
  @IsNotEmpty()
  readonly exerciseName: string;

  @IsString()
  @IsNotEmpty()
  readonly muscle: string;
}
