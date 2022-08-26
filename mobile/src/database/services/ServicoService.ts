import { dbConnection } from '../dbConnection'

const table = "servicos"
const tablecar = "carros"
const db = dbConnection.getConnection()

export default class ServicoService {

static addservico(nome: string, local: string, quilometragem: number, data: string, valor_servico: number, descricao: string, status_servico: number, id_carro: number) { //Adicionar id_usuario
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`insert into ${table} (nome, local, quilometragem, data, valor_servico, descricao, status_servico, id_carro) values (?, ?, ?, ?, ?, ?, ?, ?)`,
                [nome, local, quilometragem, data, valor_servico, descricao, status_servico, id_carro], (_, { insertId, rows }) => {
                    resolve(insertId)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static findAllCarService() {
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

    static findCarService() {
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

    static detailserv(id: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {   
            tx.executeSql(`select * from ${table} as S inner join ${tablecar} as C on C.id_carro = S.id_carro where S.id_servicos = ?`, [id], (_, { rows }) => {
                resolve(rows)
                console.log(rows)
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static delsrv(id: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {   
            tx.executeSql(`delete from ${table} where id_servicos = ?`, [id], (_, { rows }) => {
                resolve(rows)
                console.log("deletou")
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }

}