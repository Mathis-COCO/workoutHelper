import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMuscleDto } from './dto/create-muscle.dto';
// import { UpdateMuscleDto } from './dto/update-muscle.dto';
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
    const { name } = createMuscleDto;
    const existingMuscle = await this.muscleRepository.findOne({
      where: { name },
    });

    if (existingMuscle) {
      throw new NotFoundException(`Muscle with name '${name}' already exists`);
    }

    const newMuscle = this.muscleRepository.create({ name });
    return this.muscleRepository.save(newMuscle);
  }

  async getAllMuscles(): Promise<Muscle[]> {
    return this.muscleRepository.find();
  }

  async getOneMuscle(name: string) {
    return this.muscleRepository.findOne({
      where: { name },
    });
  }

  // update(id: number, updateMuscleDto: UpdateMuscleDto) {
  //   return `This action updates a #${id} muscle`;
  // }

  async remove(id: number): Promise<void> {
    const muscleToRemove = await this.muscleRepository.findOne({
      where: { id },
    });

    if (!muscleToRemove) {
      // Gérer le cas où le muscle n'est pas trouvé, peut-être jeter une exception NotFoundException
      throw new NotFoundException(`Muscle with id ${id} not found`);
    }

    await this.muscleRepository.remove(muscleToRemove);
  }
}
