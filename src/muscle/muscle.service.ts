import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMuscleDto } from './dto/create-muscle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Muscle } from './entities/muscle.entity';

@Injectable()
export class MuscleService {
  constructor(
    @InjectRepository(Muscle)
    private readonly muscleRepository: Repository<Muscle>,
  ) {}

  async createMuscle(createMuscleDto: CreateMuscleDto): Promise<Muscle> {
    const { muscle_name } = createMuscleDto;
    const existingMuscle = await this.muscleRepository.findOne({
      where: { muscle_name },
    });

    if (existingMuscle) {
      throw new NotFoundException(
        `Muscle with name '${muscle_name}' already exists`,
      );
    }

    const newMuscle = this.muscleRepository.create({ muscle_name });
    return this.muscleRepository.save(newMuscle);
  }

  async getAllMuscles(): Promise<Muscle[]> {
    return this.muscleRepository.find();
  }

  async getOneMuscle(muscle_name: string) {
    return this.muscleRepository.findOne({
      where: { muscle_name },
    });
  }

  async remove(id: number): Promise<void> {
    const muscleToRemove = await this.muscleRepository.findOne({
      where: { id },
    });
    if (!muscleToRemove) {
      throw new NotFoundException(`Muscle with id ${id} not found`);
    }
    await this.muscleRepository.remove(muscleToRemove);
  }
}
