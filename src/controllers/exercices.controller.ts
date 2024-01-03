import { Controller, Get, Param } from '@nestjs/common';
import { ExercicesService } from '../services/exercices.service';
import { Exercice } from '../entities/exercice.entity';

@Controller('exercices')
export class ExercicesController {
  constructor(private exercicesService: ExercicesService) {}

  @Get(':muscle')
  getExercicesParMuscle(@Param('muscle') muscle: string): Promise<Exercice[]> {
    return this.exercicesService.trouverParMuscle(muscle);
  }
}
