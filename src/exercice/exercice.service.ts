import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercice.dto';
// import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercice } from './entities/exercice.entity';
import { Repository } from 'typeorm';
import { Muscle } from 'src/muscle/entities/muscle.entity';
import { UpdateExerciceDto } from './dto/update-exercice.dto';

@Injectable()
export class ExerciceService {
  constructor(
    @InjectRepository(Exercice)
    private exercicesRepository: Repository<Exercice>,

    @InjectRepository(Muscle)
    private readonly muscleRepository: Repository<Muscle>,
  ) {}

  async create(createExerciceDto: CreateExerciceDto) {
    const { nom_exercice, muscle_cible } = createExerciceDto;

    // check si le muscle existe
    const existingMuscle = await this.muscleRepository.findOne({
      where: { muscle_name: muscle_cible },
    });
    if (!existingMuscle) {
      throw new NotFoundException(`Muscle '${muscle_cible}' not found`);
    }

    // pareil mais avec l'exercice existe déjà pour éviter les doublons
    const existingExercise = await this.exercicesRepository.findOne({
      where: { nom_exercice, muscle_cible },
    });

    if (existingExercise) {
      throw new ConflictException(
        `Exercise with name '${nom_exercice}' already exists`,
      );
    }

    const newExercise = this.exercicesRepository.create({
      nom_exercice,
      muscle_cible,
    });

    return this.exercicesRepository.save(newExercise);
  }

  findAll() {
    return this.exercicesRepository.find();
  }

  findByMuscle(muscle: string): Promise<Exercice[]> {
    const exerciseToSearch = this.exercicesRepository.find({
      where: {
        muscle_cible: muscle,
      },
    });
    if (!exerciseToSearch) {
      throw new NotFoundException('Exercise not found');
    }
    return exerciseToSearch;
  }

  findAnExercise(exercise: string): Promise<Exercice> {
    const exerciseToSearch = this.exercicesRepository.findOne({
      where: {
        nom_exercice: exercise,
      },
    });
    if (!exerciseToSearch) {
      throw new NotFoundException('Exercise not found');
    }
    return exerciseToSearch;
  }

  findByAny(anyData: string): Promise<Exercice[]> | Promise<Exercice> {
    const isMuscle = this.exercicesRepository.find({
      where: {
        muscle_cible: anyData,
      },
    });
    const isExercise = this.exercicesRepository.findOne({
      where: {
        nom_exercice: anyData,
      },
    });
    if (isMuscle) {
      return isMuscle;
    }
    if (isExercise) {
      return isExercise;
    }

    throw new NotFoundException(`Could't find ${anyData}.`);
  }

  async remove(id: number): Promise<void> {
    const exerciseToRemove = await this.exercicesRepository.findOne({
      where: { id },
    });
    if (!exerciseToRemove) {
      throw new NotFoundException(`Exercise with id ${id} not found`);
    }
    await this.exercicesRepository.remove(exerciseToRemove);
  }

  async update(
    id: number,
    updateExerciceDto: UpdateExerciceDto,
  ): Promise<void> {
    const exerciseToUpdate = await this.exercicesRepository.findOne({
      where: { id },
    });
    if (!exerciseToUpdate) {
      throw new NotFoundException(`Exercise with id ${id} not found`);
    }

    const { nom_exercice, muscle_cible } = updateExerciceDto;

    // check si le muscle existe
    const existingMuscle = await this.muscleRepository.findOne({
      where: { muscle_name: muscle_cible },
    });
    if (!existingMuscle) {
      throw new NotFoundException(`Muscle '${muscle_cible}' not found`);
    }

    // pareil mais avec l'exercice existe déjà pour éviter les doublons
    const existingExercise = await this.exercicesRepository.findOne({
      where: { nom_exercice, muscle_cible },
    });

    if (existingExercise) {
      throw new ConflictException(
        `Exercise with name '${nom_exercice}' already exists`,
      );
    }

    this.exercicesRepository.merge(exerciseToUpdate, updateExerciceDto);
    await this.exercicesRepository.save(exerciseToUpdate);
  }
}
