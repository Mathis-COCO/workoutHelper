import { Test, TestingModule } from '@nestjs/testing';
import { MuscleService } from './muscle.service';

describe('MuscleService', () => {
  let service: MuscleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuscleService],
    }).compile();

    service = module.get<MuscleService>(MuscleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
