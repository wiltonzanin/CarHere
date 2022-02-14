import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAutonomia1621981452407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'autonomia',
            columns: [
                {
                    name: 'id_autonomia',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'kmInicial',
                    type: 'integer',
                    length: "6",
                    isNullable: false
                },
                {
                    name: 'kmFinal',
                    type: 'integer',
                    length: "6",
                    isNullable: false
                },
                {
                    name: 'tipoCombustivel',
                    type: 'varchar',
                    length: "20",
                    isNullable: false
                },
                {
                    name: 'litroAbastecidos',
                    type: 'integer',
                    length: "3",
                    isNullable: false
                },
                {
                    name: 'percurso',
                    type: 'varchar',
                    length: "20",
                    isNullable: false
                },
                {
                    name: 'mediaConsumo',
                    type: 'integer',
                    length: "4",
                    isNullable: false
                },
                {
                    name: 'criado',
                    type: 'string',
                    length: "10",
                    isNullable: false
                },
                {
                    name: 'id_carro',
                    type: 'integer'
                },
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
        await queryRunner.dropTable('autonomia')
    }

}
