import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ExerciceService } from './exercice.service';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { ApiTags } from '@nestjs/swagger';
import { Exercice } from './entities/exercice.entity';
import { UpdateMuscleDto } from 'src/muscle/dto/update-muscle.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';

@ApiTags('exercice')
@Controller('exercice')
export class ExerciceController {
  constructor(private readonly exerciceService: ExerciceService) {}

  @Post()
  async create(@Body() createExerciceDto: CreateExerciceDto) {
    return this.exerciceService.create(createExerciceDto);
  }

  @Get()
  findAll(): Promise<Exercice[]> {
    return this.exerciceService.findAll();
  }

  @Get('/by-muscle/:muscleName')
  findByMuscle(@Param('muscleName') muscleName: string): Promise<Exercice[]> {
    return this.exerciceService.findByMuscle(muscleName);
  }

  @Get('/by-name/:nom_exercice')
  findByExercise(
    @Param('nom_exercice') nom_exercice: string,
  ): Promise<Exercice> {
    return this.exerciceService.findAnExercise(nom_exercice);
  }

  @Get('/by-any/:anyData')
  findByAny(
    @Param('anyData') anyData: string,
  ): Promise<Exercice[]> | Promise<Exercice> | Exercice {
    return this.exerciceService.findByAny(anyData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.exerciceService.remove(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() UpdateExerciceDto: UpdateExerciceDto,
  ): Promise<void> {
    return this.exerciceService.update(id, UpdateExerciceDto);
  }
}
