import { Module } from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { MuscleController } from './muscle.controller';

@Module({
  controllers: [MuscleController],
  providers: [MuscleService],
})
export class MuscleModule {}
