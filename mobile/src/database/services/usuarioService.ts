import { dbConnection } from '../dbConnection'

const table = "usuarios"
const db = dbConnection.getConnection()

export default class UsuarioService {

    static addUser(nome: string, email: string, senha: string) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`insert into ${table} (nome, email, senha) values (?, ?, ?)`,
                [nome, email, senha], (_, { insertId, rows }) => {
                    resolve(insertId)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
}