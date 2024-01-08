import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciceDto } from './create-exercice.dto';

export class UpdateExerciceDto extends PartialType(CreateExerciceDto) {}
