import { dbConnection } from '../dbConnection'

const table = "imagens_carro";
const tableCarro = "carros";
const db = dbConnection.getConnection()

export default class imagensCarroService {

    static findAll(id_carro: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(
                `select * from ${table}
                where id_carro = ${id_carro}`
                , [], (_, { rows }) => {
                    resolve(rows)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
}