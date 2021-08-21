import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCarro1621980851628 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'carro',
            columns: [
                {
                    name: 'id_carro',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'modelo',
                    type: 'varchar',
                    length: "30",
                    isNullable: false
                },
                {
                    name: 'marca',
                    type: 'varchar',
                    length: "30",
                    isNullable: false
                },
                {
                    name: 'ano',
                    type: 'integer',
                    length: "4",
                    isNullable: false
                },
                {
                    name: 'combustivel',
                    type: 'varchar',
                    length: "20",
                    isNullable: false
                },
                {
                    name: 'motorizacao',
                    type: 'varchar',
                    length: "20",
                    isNullable: false
                },
                {
                    name: 'id_usuario',
                    type: 'integer'
                },
            ],
            foreignKeys: [
                {
                    name: 'usuario_fk',
                    columnNames: ['id_usuario'],
                    referencedTableName: 'usuarios',
                    referencedColumnNames: ['id_usuario'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('carro')
    }
}
