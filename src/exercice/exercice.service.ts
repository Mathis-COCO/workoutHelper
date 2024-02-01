import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercice.dto';
// import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercice } from './entities/exercice.entity';
import { Repository } from 'typeorm';
import { Muscle } from 'src/muscle/entities/muscle.entity';

@Injectable()
export class ExerciceService {
  constructor(
    @InjectRepository(Exercice)
    private exercicesRepository: Repository<Exercice>,

    @InjectRepository(Muscle)
    private readonly muscleRepository: Repository<Muscle>,
  ) {}

  async create(createExerciceDto: CreateExerciceDto) {
    const { muscle_cible } = createExerciceDto;
    const existingMuscle = await this.muscleRepository.findOne({
      where: { muscle_name: muscle_cible },
    });

    if (!existingMuscle) {
      throw new NotFoundException(
        `No exercise for muscle '${muscle_cible}' found`,
      );
    }

    const newMuscle = this.exercicesRepository.create({ muscle_cible });
    return this.exercicesRepository.save(newMuscle);
  }

  // findAll() {
  //   return `This action returns all exercice`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} exercice`;
  // }

  // update(id: number, updateExerciceDto: UpdateExerciceDto) {
  //   return `This action updates a #${id} exercice`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} exercice`;
  // }

  findByMuscle(muscle: string): Promise<Exercice[]> {
    return this.exercicesRepository.find({
      where: {
        muscle_cible: muscle,
      },
    });
  }
}
