import {MigrationInterface, QueryRunner} from "typeorm";

export class ListingTable1587653035986 implements MigrationInterface {
    name = 'ListingTable1587653035986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" RENAME COLUMN "quests" TO "guests"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" RENAME COLUMN "guests" TO "quests"`, undefined);
    }

}
