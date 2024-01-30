import { MigrationInterface, QueryRunner } from "typeorm";

export class ExerciseMuscleTest1704725973268 implements MigrationInterface {
    name = 'ExerciseMuscleTest1704725973268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "muscle" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cbce9889ea2f0fd84f740b5cbe2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "muscle"`);
    }

}
