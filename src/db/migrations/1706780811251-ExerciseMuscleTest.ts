import { MigrationInterface, QueryRunner } from "typeorm";

export class ExerciseMuscleTest1706780811251 implements MigrationInterface {
    name = 'ExerciseMuscleTest1706780811251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercice" RENAME COLUMN "nom" TO "nom_exercice"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercice" RENAME COLUMN "nom_exercice" TO "nom"`);
    }

}
