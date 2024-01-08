import { Test, TestingModule } from '@nestjs/testing';
import { MuscleController } from './muscle.controller';
import { MuscleService } from './muscle.service';

describe('MuscleController', () => {
  let controller: MuscleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuscleController],
      providers: [MuscleService],
    }).compile();

    controller = module.get<MuscleController>(MuscleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
