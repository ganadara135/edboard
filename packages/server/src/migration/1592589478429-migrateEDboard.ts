import {MigrationInterface, QueryRunner} from "typeorm";

export class migrateEDboard1592589478429 implements MigrationInterface {
    name = 'migrateEDboard1592589478429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `MonthGoals` ADD `description` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `MonthGoals` DROP COLUMN `description`");
    }

}
