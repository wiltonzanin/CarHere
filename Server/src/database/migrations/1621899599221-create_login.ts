import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createLogin1621899599221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'login',
            columns: [
                {
                    name: 'id_login',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'logs',
                    type: 'varchar'
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
        await queryRunner.dropTable('login')
    }
}
