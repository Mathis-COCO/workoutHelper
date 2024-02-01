import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { CreateMuscleDto } from './dto/create-muscle.dto';
import { Muscle } from './entities/muscle.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('muscles')
@Controller('muscle')
export class MuscleController {
  constructor(private readonly muscleService: MuscleService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
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
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: number) {
    return this.muscleService.remove(id);
  }
}
