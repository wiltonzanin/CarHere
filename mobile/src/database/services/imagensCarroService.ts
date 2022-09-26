import { dbConnection } from '../dbConnection'
import { getAuth } from "firebase/auth";
import { FirebaseInit } from '../../database/Firebase';

FirebaseInit();

const auth = getAuth() ;


const table = "imagens_carro";
const tableCarro = "carros";

export default class imagensCarroService {
    
    static async findAll(id_carro: number) {
        const db = await dbConnection();
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