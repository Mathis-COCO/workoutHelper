import { Injectable } from '@nestjs/common';
import { CreateMuscleDto } from './dto/create-muscle.dto';
import { UpdateMuscleDto } from './dto/update-muscle.dto';

@Injectable()
export class MuscleService {
  create(createMuscleDto: CreateMuscleDto) {
    return 'This action adds a new muscle';
  }

  findAll() {
    return `This action returns all muscle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} muscle`;
  }

  update(id: number, updateMuscleDto: UpdateMuscleDto) {
    return `This action updates a #${id} muscle`;
  }

  remove(id: number) {
    return `This action removes a #${id} muscle`;
  }
}
