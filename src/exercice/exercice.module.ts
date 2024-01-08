import { Module } from '@nestjs/common';
import { ExerciceService } from './exercice.service';
import { ExerciceController } from './exercice.controller';

@Module({
  controllers: [ExerciceController],
  providers: [ExerciceService],
})
export class ExerciceModule {}
