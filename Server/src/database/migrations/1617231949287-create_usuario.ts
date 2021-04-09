import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsuario1617231949287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'usuarios',
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
                    name: 'nome',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'cpf',
                    type: 'integer',
                    length: "11",
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'senha',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'celular',
                    type: 'integer',
                    length: "11",
                    isNullable: false
                },
                {
                    name: 'cep',
                    type: 'integer',
                    length: "20"
                },
                {
                    name: 'data_nascimento',
                    type: 'date'
                },
                {
                    name: 'genero',
                    type: 'varchar'
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
