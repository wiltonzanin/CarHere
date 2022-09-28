import { WebSQLDatabase } from 'expo-sqlite';
import { FirebaseInit } from '../database/Firebase';
import { dbConnection } from './dbConnection';

FirebaseInit();

export default class DatabaseInit {

    static async InitDb() {
        const db = await dbConnection();
        console.log("Rodou InitDB dentro")
        var sql = [
            //`DROP TABLE IF EXISTS imagens_carro;`,
            //`DROP TABLE IF EXISTS carros;`,
            //`DROP TABLE IF EXISTS usuarios;`,
            'PRAGMA foreign_keys = ON;',

            `create table if not exists "usuarios" (
                "UID" TEXT primary key,
                "nome" TEXT
            )`,

            `create table if not exists "carros" (
                "id_carro" integer primary key autoincrement,
                "modelo" TEXT,
                "marca"	TEXT,
                "ano" INTENGER,
                "combustivel" TEXT,
                "motorizacao" TEXT,
                "id_usuario" TEXT,
                FOREIGN KEY(id_usuario) REFERENCES usuarios(UID)
            )`,

            `create table if not exists "imagens_carro" (
                "id_imagem" integer primary key autoincrement,
                "path" TEXT,
                "id_carro" INTENGER,
                FOREIGN KEY(id_carro) REFERENCES carros(id_carro) on delete cascade
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
                FOREIGN KEY(id_carro) REFERENCES carros(id_carro) on delete cascade
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
                FOREIGN KEY(id_carro) REFERENCES carros(id_carro) on delete cascade
            )`,
            `insert into usuarios(UID, nome) values('1', 'teste');`,
            //'insert into carros (modelo, marca, ano, combustivel, motorizacao, id_usuario) values ("teste", "teste", 2011, "flex", "2.0", 1)',
        ];
        console.log("rodou dbinit dentro");
        console.log(db)        
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

