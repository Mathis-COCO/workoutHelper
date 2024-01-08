import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mucle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;
}
