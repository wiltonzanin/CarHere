import { dbConnection , UploadDB} from '../dbConnection';
import { FirebaseInit } from '../Firebase';
FirebaseInit();

export default class QuilometragemService {


    static async KMDat(id:number) {
        const db = await dbConnection(); 
        return new Promise((resolve, reject) => db.transaction(tx => {
                tx.executeSql(`SELECT max(quilometragem) as quilometragem, data as MaxDate 
                from servicos where id_carro = ? 
                and data = (
                    select strftime('%d/%m/%Y',(max(substr(data, 7, 4)||'-'||substr(data, 4,2)||'-'||substr(data, 1,2)))) from servicos where id_carro = ?
                    ) `,
                [id, id], (_, { rows }) => {
                    resolve(rows.item(0))
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }
}

