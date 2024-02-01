import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExerciceService } from './exercice.service';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('exercice')
@Controller('exercice')
export class ExerciceController {
  constructor(private readonly exerciceService: ExerciceService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  async create(@Body() createExerciceDto: CreateExerciceDto) {
    return this.exerciceService.create(createExerciceDto);
  }

  // @Get()
  // findAll() {
  //   return this.exerciceService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.exerciceService.findOne(+id);
  // }

  // @Get('exercices/:muscle')
  // findByMuscle(@Param('muscle') muscle: string) {
  //   return this.exerciceService.findByMuscle(muscle);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateExerciceDto: UpdateExerciceDto) {
  //   return this.exerciceService.update(+id, updateExerciceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.exerciceService.remove(+id);
  // }
}
