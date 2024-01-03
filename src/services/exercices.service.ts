import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercice } from '../entities/exercice.entity';

@Injectable()
export class ExercicesService {
  constructor(
    @InjectRepository(Exercice)
    private exercicesRepository: Repository<Exercice>,
  ) {}

  async trouverParMuscle(muscle: string): Promise<Exercice[]> {
    return this.exercicesRepository.find({
      where: {
        muscle_cible: muscle,
      },
    });
  }
}
