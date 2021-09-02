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
                    name: 'Nome',
                    type: 'varchar',
                    length: "50",
                    isNullable: false
                },
                {
                    name: 'LocalServico',
                    type: 'varchar',
                    length: "100",
                    isNullable: false
                },
                {
                    name: 'DataServico',
                    type: 'varchar',
                    length: "8",
                    isNullable: false
                },
                {
                    name: 'TempoServico',
                    type: 'varchar',
                    length: "4",
                    isNullable: false
                },
                {
                    name: 'ValorServico',
                    type: 'varchar',
                    length: "25",
                    isNullable: false
                },
                {
                    name: 'DescricaoServico',
                    type: 'varchar',
                    length: "255",
                    isNullable: false
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('servico')
    }
}
