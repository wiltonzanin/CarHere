import { dbConnection } from '../dbConnection'

const table = "carros"
const db = dbConnection.getConnection()

export default class CarroService {

    static addCarro(modelo: string, marca: string, ano: number, combustivel: string, motorizacao: string) { //Adicionar id_usuario
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`insert into ${table} (modelo, marca, ano, combustivel, motorizacao, id_usuario) values (?, ?, ?, ?, ?, 1)`, //Id do usuário fixo por momento
                [modelo, marca, ano, combustivel, motorizacao], (_, { insertId, rows }) => {
                    resolve(insertId)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static findAll() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(rows)
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }
}