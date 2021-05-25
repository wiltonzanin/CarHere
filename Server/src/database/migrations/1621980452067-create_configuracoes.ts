import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createConfiguracoes1621980452067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'configuracoes',
            columns: [
                {
                    name: 'id_configuracoes',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
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
        await queryRunner.dropTable('configuracoes')
    }

}
