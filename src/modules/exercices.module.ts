import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercicesController } from '../controllers/exercices.controller';
import { ExercicesService } from '../services/exercices.service';
import { Exercice } from '../entities/exercice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercice])],
  controllers: [ExercicesController],
  providers: [ExercicesService],
})
export class ExercicesModule {}
