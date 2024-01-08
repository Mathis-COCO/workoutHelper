import { PartialType } from '@nestjs/mapped-types';
import { CreateMuscleDto } from './create-muscle.dto';

export class UpdateMuscleDto extends PartialType(CreateMuscleDto) {}
