import { dbConnection , UploadDB} from '../dbConnection';
import { FirebaseInit } from '../../database/Firebase';
FirebaseInit();

const table = "usuarios"
export default class UsuarioService {


    static async addUser(UID: string, name: string) {
        const db = await dbConnection(); 
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`
                INSERT INTO ${table} (UID, name)
                SELECT '${UID}','${name}'  
                WHERE NOT EXISTS (
                SELECT UID FROM ${table} WHERE UID = '${UID}');`,
                [], (_, { insertId, rows }) => {
                    resolve(insertId)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
 
 
    /*
        static checkemail(email: string) {
            return new Promise((resolve, reject) => db.transaction(tx => {
                tx.executeSql(`select email from ${table} where email like ?`, [email], (_, { rows }) => {
                    resolve(rows)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
            }, (txError) => {
                console.log(txError);
            }))
        }
        */
    /*
        static checksenha(senha: string) {
            return new Promise((resolve, reject) => db.transaction(tx => {
                tx.executeSql(`select senha from ${table} where senha like ?`, [senha], (_, { rows }) => {
                    resolve(rows)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
            }, (txError) => {
                console.log(txError);
            }))
        }
        */
}

