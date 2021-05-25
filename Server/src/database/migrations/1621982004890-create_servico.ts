import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createServico1621982004890 implements MigrationInterface {

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
                    name: 'icone',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    length: "50",
                    isNullable: false
                },
                {
                    name: 'local',
                    type: 'varchar',
                    length: "80",
                    isNullable: false
                },
                {
                    name: 'profissional',
                    type: 'varchar',
                    length: "50",
                    isNullable: false
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('servico')
    }
}
