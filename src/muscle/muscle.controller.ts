import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { CreateMuscleDto } from './dto/create-muscle.dto';
// import { UpdateMuscleDto } from './dto/update-muscle.dto';
import { Muscle } from './entities/muscle.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('muscles')
@Controller('muscle')
export class MuscleController {
  constructor(private readonly muscleService: MuscleService) {}

  // @Get()
  // findAll() {
  //   return this.muscleService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.muscleService.findOne(+id);
  // }

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

  @Delete(':name')
  remove(@Param('id') id: number) {
    return this.muscleService.remove(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMuscleDto: UpdateMuscleDto) {
  //   return this.muscleService.update(+id, updateMuscleDto);
  // }
}
