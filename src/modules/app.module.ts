import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'src/controllers/app.controller';
import { dataSourceOptions } from 'src/db/data-source';
import { MuscleController } from 'src/muscle/muscle.controller';
import { MuscleService } from 'src/muscle/muscle.service';
import { Muscle } from 'src/muscle/entities/muscle.entity';
import { Exercice } from 'src/exercice/entities/exercice.entity';
import { ExerciceController } from 'src/exercice/exercice.controller';
import { ExerciceService } from 'src/exercice/exercice.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exercice, Muscle]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 50,
      },
    ]),
  ],
  controllers: [AppController, ExerciceController, MuscleController],
  providers: [ExerciceService, MuscleService],
})
export class AppModule {}
