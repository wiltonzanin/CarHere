import { dbConnection } from '../dbConnection'

const table = "carros";
const imageTable = "imagens_carro";

export default class CarroService {

    static async addCarro(modelo: string, marca: string, ano: number, combustivel: string, motorizacao: string, imageUri: String[]) { //Adicionar id_usuario
        const db = await dbConnection();
         new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`insert into ${table} (modelo, marca, ano, combustivel, motorizacao, id_usuario) values (?, ?, ?, ?, ?, 1)`, //Id do usuário fixo por momento
                [modelo, marca, ano, combustivel, motorizacao], (_, { insertId, rows }) => {
                    resolve(insertId);
                    imageUri.forEach(uri => {
                        tx.executeSql(`insert into ${imageTable} (path, id_carro) values (?, ?)`,
                            [uri.toString(), Number(insertId)], (_, { insertId, rows }) => {
                                resolve(insertId)
                            }), (sqlError: any) => {
                                console.log(sqlError);
                            }
                    });
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async editCar(modelo: string, marca: string, ano: number, combustivel: string, motorizacao: string, id_carro: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`update ${table} 
            set modelo = ?, marca = ?, ano = ?, combustivel = ?, motorizacao = ?
            where id_carro = ?`,
                [modelo, marca, ano, combustivel, motorizacao, id_carro], (_, { insertId, rows }) => {
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
            tx.executeSql(
                `select * from ${table}`
                , [], (_, { rows }) => {
                    resolve(rows)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findAllWithImage() {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(
                `select *, (select I.id_imagem from ${imageTable} as I
                    join ${table} as C1 on I.id_carro = C.id_carro limit 1) as id_imagem,
                    (select I.path from ${imageTable} as I 
                        join ${table} as C1 on I.id_carro = C.id_carro limit 1)
                    as path from ${table} as C`
                , [], (_, { rows }) => {
                    resolve(rows)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findCarById(id: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(
                `select * from ${table}
                where id_carro = ?`
                , [id], (_, { rows }) => {
                    resolve(rows.item(0))
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async deleteCarById(id: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(
                `delete from ${table}
                where id_carro = ?`
                , [id], (_, { rowsAffected }) => {
                    resolve(rowsAffected)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findCarAsc() {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(
                `select *, (select I.id_imagem from ${imageTable} as I
                    join ${table} as C1 on I.id_carro = C.id_carro limit 1) as id_imagem,
                    (select I.path from ${imageTable} as I 
                        join ${table} as C1 on I.id_carro = C.id_carro limit 1)
                    as path from ${table} as C limit 1`
                , [], (_, { rows }) => {
                    resolve(rows.item(0))
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
    
    static async countCars() {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(
                `SELECT COUNT(*) FROM ${table}`
                , [], (_, { rows }) => {
                    resolve(rows.item(0))
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
}