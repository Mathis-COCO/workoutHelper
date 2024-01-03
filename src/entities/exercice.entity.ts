import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  muscle_cible: string;

  // autres colonnes...
}
