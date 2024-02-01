import { MigrationInterface, QueryRunner } from "typeorm";

export class ExerciseMuscle1706713189969 implements MigrationInterface {
    name = 'ExerciseMuscle1706713189969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "muscle" ("id" SERIAL NOT NULL, "muscle_name" character varying NOT NULL, CONSTRAINT "PK_cbce9889ea2f0fd84f740b5cbe2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exercice" ("id" SERIAL NOT NULL, "nom" character varying NOT NULL, "muscle_cible" character varying NOT NULL, CONSTRAINT "PK_b084e90a604d8b0560393b99f56" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exercice"`);
        await queryRunner.query(`DROP TABLE "muscle"`);
    }

}