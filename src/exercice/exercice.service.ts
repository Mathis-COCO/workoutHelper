import { Injectable } from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercice } from './entities/exercice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExerciceService {
  constructor(
    @InjectRepository(Exercice)
    private exercicesRepository: Repository<Exercice>,
  ) {}

  create(createExerciceDto: CreateExerciceDto) {
    return 'This action adds a new exercice';
  }

  findAll() {
    return `This action returns all exercice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercice`;
  }

  update(id: number, updateExerciceDto: UpdateExerciceDto) {
    return `This action updates a #${id} exercice`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercice`;
  }

  findByMuscle(muscle: string): Promise<Exercice[]> {
    return this.exercicesRepository.find({
      where: {
        muscle_cible: muscle,
      },
    });
  }
}
