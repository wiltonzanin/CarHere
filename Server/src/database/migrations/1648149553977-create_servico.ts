import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createServico1648149553977 implements MigrationInterface {


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
                    isNullable: true
                },
                {
                    name: 'quilometragem',
                    type: 'integer',
                    length: "10",
                    isNullable: true
                },
                {
                    name: 'datafor',
                    type: 'varchar',
                    length: "10",
                    isNullable: true
                },
                {
                    name: 'ValorServico',
                    type: 'integer',
                    length: "10",
                    isNullable: true
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    length: "255",
                    isNullable: true
                },
                {
                    name: 'statusServico',
                    type: 'integer',
                    length: "2",
                    isNullable: false
                },

                {
                    name: 'id_carro',
                    type: 'interger',
                    
                },
                {
                    name: 'id_usuario',
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
                },
                {
                    name: 'usuario_fk',
                    columnNames: ['id_usuario'],
                    referencedTableName: 'usuarios',
                    referencedColumnNames: ['id_usuario'],
                    onUpdate: 'CASCADE',
                }
            ],
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('servico')
    }

}


