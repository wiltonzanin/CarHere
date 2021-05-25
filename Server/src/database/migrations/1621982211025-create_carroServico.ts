import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCarroServico1621982211025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'carroServico',
            columns: [
                {
                    name: 'id_carroServico',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'dataServico',
                    type: 'date'
                },
                {
                    name: 'valorGasto',
                    type: 'decimal',
                    precision: 8,
                    scale: 2,
                    isNullable: false
                },
                {
                    name: 'quilometragem',
                    type: 'integer',
                    length: "6",
                    isNullable: false
                },
                {
                    name: 'id_carro',
                    type: 'integer'
                },
                {
                    name: 'id_usuario',
                    type: 'integer'
                },
                {
                    name: 'id_servico',
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
                },
                {
                    name: 'usuario_fk',
                    columnNames: ['id_usuario'],
                    referencedTableName: 'usuarios',
                    referencedColumnNames: ['id_usuario'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'servico_fk',
                    columnNames: ['id_servico'],
                    referencedTableName: 'servico',
                    referencedColumnNames: ['id_servico'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('carroServico')
    }
}
