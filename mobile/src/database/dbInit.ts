import { WebSQLDatabase } from 'expo-sqlite';
import { dbConnection } from './dbConnection'

var db: WebSQLDatabase | null = null
export default class DatabaseInit {

    constructor() {
        db = dbConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
        this.InitDb()
    }
    private InitDb() {
        var sql = [
            //`DROP TABLE IF EXISTS carros;`,
            //`DROP TABLE IF EXISTS usuarios;`,

            `create table if not exists "usuarios" (
                "id_usuario" integer primary key autoincrement,
                "nome" TEXT,
                "email"	TEXT,
                "senha"	TEXT
            )`,

            `create table if not exists "carros" (
                "id_carro" integer primary key autoincrement,
                "modelo" TEXT,
                "marca"	TEXT,
                "ano" INTENGER,
                "combustivel" TEXT,
                "motorizacao" TEXT,
                id_usuario INTENGER,
                FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
            )`,

            `create table if not exists "imagens_carro" (
                "id_imagem" integer primary key autoincrement,
                "path" TEXT,
                "id_carro" TEXT,
                FOREIGN KEY(id_carro) REFERENCES carros(id_carro)
            )`,

            `create table if not exists "servicos" (
                "id_servicos" integer primary key autoincrement,
                "nome" TEXT,
                "local"	TEXT,
                "quilometragem"	INTENGER,
                "data" TEXT,
                "valor_servico" INTENGER,
                "descricao" TEXT,
                "status_servico" INTENGER,
                "id_carro" INTEGER,
                FOREIGN KEY(id_carro) REFERENCES carros(id_carro)
            )`,
            
            `create table if not exists "autonomias" (
                "id_autonomia" integer primary key autoincrement,
                "km_inicial" INTENGER,
                "km_final" INTENGER,
                "tipo_combustivel" TEXT,
                "litros_abastecidos" INTENGER,
                "percurso" TEXT,
                "media_consumo" INTENGER,
                "data_criacao" TEXT,
                "id_carro" INTENGER,
                FOREIGN KEY(id_carro) REFERENCES carros(id_carro)
            )`,

            //`insert into usuarios(nome, email, senha) values('Usuario', 'teste@email.com', '123');`
        ];

        db?.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }
}