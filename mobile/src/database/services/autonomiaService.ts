import { dbConnection } from '../dbConnection'
import { FirebaseInit } from '../../database/Firebase';

FirebaseInit();

const table = "autonomias";

export default class AutonomiaService {

    static async addAutonomia(km_inicial: number, km_final: number, tipo_combustivel: string, litros_abastecidos: number, percurso: string, media_consumo: number, id_carro: number) { //Adicionar id_usuario
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`insert into ${table} 
            (km_inicial, km_final, tipo_combustivel, litros_abastecidos, percurso, media_consumo, data_criacao, id_carro) 
            values (?, ?, ?, ?, ?, ?, datetime('now', 'localtime'), ?)`,
                [km_inicial, km_final, tipo_combustivel, litros_abastecidos, percurso, media_consumo, id_carro], (_, { insertId, rows }) => {
                    resolve(insertId);
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
    
    static async editAutonomia(km_inicial: number, km_final: number, tipo_combustivel: string, litros_abastecidos: number, percurso: string, media_consumo: number, id_autonomia: number) { //Adicionar id_usuario
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`update ${table} 
            set km_inicial = ?, km_final = ?, tipo_combustivel = ?, litros_abastecidos = ?, percurso = ?, media_consumo = ?
            where id_autonomia = ?`,
                [km_inicial, km_final, tipo_combustivel, litros_abastecidos, percurso, media_consumo, id_autonomia], (_, { insertId, rows }) => {
                    resolve(insertId);
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findAll() {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`,
                [], (_, { rows }) => {
                    resolve(rows);
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findAllByIdCarro(id_autonomia: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}
            where id_carro = ?`,
                [id_autonomia], (_, { rows }) => {
                    resolve(rows);
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    

    static async findAutonomiaById(id: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}
            where id_autonomia = ?`,
                [id], (_, { rows }) => {
                    resolve(rows.item(0));
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findLastOne(id: number) { //Adicionar id_usuario
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} as a
            where a.id_carro = ?
            order by id_autonomia desc
            limit 1`,
                [id], (_, { rows }) => {
                    resolve(rows.item(0));
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async deleteAutonomiaById(id_autonomia: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(
                `delete from ${table}
                where id_autonomia = ?`
                , [id_autonomia], (_, { rowsAffected }) => {
                    resolve(rowsAffected)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
}