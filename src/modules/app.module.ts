import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'src/controllers/app.controller';
import { ExercicesController } from 'src/controllers/exercices.controller';
import { ExercicesService } from 'src/services/exercices.service';
import { Exercice } from 'src/entities/exercice.entity';
import { dataSourceOptions } from 'src/db/data-source';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exercice]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [AppController, ExercicesController],
  providers: [ExercicesService],
  // controllers, providers
})
export class AppModule {}
