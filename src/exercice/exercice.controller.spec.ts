import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceController } from './exercice.controller';
import { ExerciceService } from './exercice.service';

describe('ExerciceController', () => {
  let controller: ExerciceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciceController],
      providers: [ExerciceService],
    }).compile();

    controller = module.get<ExerciceController>(ExerciceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
