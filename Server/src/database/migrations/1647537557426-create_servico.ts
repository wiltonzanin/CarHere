import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createServico1647537557426 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'servico',
            columns: [
                {
                    name: 'id_servico',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: "40",
                    isNullable: false
                },
                {
                    name: 'local',
                    type: 'varchar',
                    length: "50",
                    isNullable: false
                },
                {
                    name: 'datafor',
                    type: 'varchar',
                    length: "10",
                },
                {
                    name: 'ValorServico',
                    type: 'integer',
                    length: "10",
                    isNullable: false
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    length: "255",
                    isNullable: false
                },
                {
                    name: 'id_carro',
                    type: 'interger',
                    
                },
            ],
            foreignKeys: [
                {
                    name: 'carro_fk',
                    columnNames: ['id_carro'],
                    referencedTableName: 'carro',
                    referencedColumnNames: ['id_carro'],
                    onUpdate: 'CASCADE',
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('servico')
    }

}
