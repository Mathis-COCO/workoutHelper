import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceService } from './exercice.service';

describe('ExerciceService', () => {
  let service: ExerciceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciceService],
    }).compile();

    service = module.get<ExerciceService>(ExerciceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
