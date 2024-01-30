import { MigrationInterface, QueryRunner } from "typeorm";

export class ExerciseMuscleTest1704726167994 implements MigrationInterface {
    name = 'ExerciseMuscleTest1704726167994'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercice" ("id" SERIAL NOT NULL, "nom" character varying NOT NULL, "muscle_cible" character varying NOT NULL, CONSTRAINT "PK_b084e90a604d8b0560393b99f56" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exercice"`);
    }

}
