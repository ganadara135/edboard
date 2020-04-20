import {MigrationInterface, QueryRunner} from "typeorm";

export class ListingTable1587303495946 implements MigrationInterface {
    name = 'ListingTable1587303495946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" ADD "category" character varying(100) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "category"`, undefined);
    }

}
