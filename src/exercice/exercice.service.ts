import { Injectable, NotFoundException } from '@nestjs/common';
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

  // async create(createExerciceDto: CreateExerciceDto) {
  //   const { muscleName } = createExerciceDto;
  //   const existingMuscle = await this.exercicesRepository.findOne({
  //     where: { muscleName },
  //   });

  //   if (existingMuscle) {
  //     throw new NotFoundException(
  //       `Exersice with name '${name}' already exists`,
  //     );
  //   }

  //   const newMuscle = this.exercicesRepository.create({ muscleName });
  //   return this.exercicesRepository.save(newMuscle);
  // }

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
