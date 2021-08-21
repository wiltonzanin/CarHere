import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImagensCarros1629211139499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'imagens_carros',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },

                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'id_carro',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'carro_fk',
                    columnNames: ['id_carro'],
                    referencedTableName: 'carro',
                    referencedColumnNames: ['id_carro'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagens_carros')
    }

}
