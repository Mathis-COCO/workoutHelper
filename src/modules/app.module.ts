import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from 'src/controllers/app.controller';
import { dataSourceOptions } from 'src/db/data-source';
import { MuscleController } from 'src/muscle/muscle.controller';
import { MuscleService } from 'src/muscle/muscle.service';
import { Muscle } from 'src/muscle/entities/muscle.entity';
import { Exercice } from 'src/exercice/entities/exercice.entity';
import { ExerciceController } from 'src/exercice/exercice.controller';
import { ExerciceService } from 'src/exercice/exercice.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

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
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, ExerciceController, MuscleController],
  providers: [ExerciceService, MuscleService, AuthService, UsersService],
})
export class AppModule {}
