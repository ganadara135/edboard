import {MigrationInterface, QueryRunner} from "typeorm";

export class migrateEDboard1592327596960 implements MigrationInterface {
    name = 'migrateEDboard1592327596960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `listings` CHANGE `latitude` `latitude` double NOT NULL");
        await queryRunner.query("ALTER TABLE `listings` CHANGE `longitude` `longitude` double NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `listings` CHANGE `longitude` `longitude` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `listings` CHANGE `latitude` `latitude` double(22) NOT NULL");
    }

}
