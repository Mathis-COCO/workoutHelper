import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Exercice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_exercice: string;

  @Column()
  muscle_cible: string;
}
