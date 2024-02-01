import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'public' })
export class Muscle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  muscle_name: string;
}
