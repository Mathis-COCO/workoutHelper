import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { CreateMuscleDto } from './dto/create-muscle.dto';
import { Muscle } from './entities/muscle.entity';
import { ApiTags } from '@nestjs/swagger';
import { UpdateMuscleDto } from './dto/update-muscle.dto';

@ApiTags('muscles')
@Controller('muscle')
export class MuscleController {
  constructor(private readonly muscleService: MuscleService) {}

  @Post()
  async createMuscle(
    @Body() CreateMuscleDto: CreateMuscleDto,
  ): Promise<Muscle> {
    return this.muscleService.createMuscle(CreateMuscleDto);
  }

  @Get()
  async getAllMuscles(): Promise<Muscle[]> {
    return this.muscleService.getAllMuscles();
  }

  @Get(':name')
  async getOneMuscle(@Param('name') muscleName: string): Promise<Muscle> {
    return this.muscleService.getOneMuscle(muscleName);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.muscleService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateMuscleDto: UpdateMuscleDto,
  ): Promise<void> {
    return this.muscleService.update(id, updateMuscleDto);
  }
}
