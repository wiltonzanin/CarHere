import { dbConnection , UploadDB} from '../dbConnection'
import { FirebaseInit } from '../../database/Firebase';
FirebaseInit();

const table = "servicos"
const tablecar = "carros"

export default class ServicoService {


static async addservico(nome: string, local: string, quilometragem: number, data: string, valor_servico: number, descricao: string, status_servico: number, id_carro: number) { //Adicionar id_usuario
    const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`insert into ${table} (nome, local, quilometragem, data, valor_servico, descricao, status_servico, id_carro) values (?, ?, ?, ?, ?, ?, ?, ?)`,
                [nome, local, quilometragem, data, valor_servico, descricao, status_servico, id_carro], (_, { insertId, rows }) => {
                    resolve(insertId);
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async updateServico(nome: string, local: string, quilometragem: number, data: string, valor_servico: number, descricao: string, status_servico: number, id_servicos: number) { //Adicionar id_carro quando for possivel editar
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`update ${table} 
            set nome = ?, local = ?, quilometragem = ?, data = ?, valor_servico = ?, descricao = ?, status_servico = ?
            where id_servicos = ?`,
                [nome, local, quilometragem, data, valor_servico, descricao, status_servico, id_servicos], (_, { insertId, rows }) => {
                    resolve(insertId);
                    UploadDB()
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findAllCarService() {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(rows);
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findServiceById(id: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}
            where id_servicos = ?`, [id], (_, { rows }) => {
                resolve(rows.item(0));
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async findCarService() {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(rows);
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
            tx.executeSql(`select * from ${table} as s
            inner join carros as c
            where c.id_carro = s.id_carro`, [], (_, { rows }) => {
                resolve(rows);
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }
    
    static async findLastOne(id: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} as s
            where s.id_carro = ?
            order by id_servicos desc
            limit 1`,
                [id], (_, { rows }) => {
                    resolve(rows);
                }), (sqlError: any) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async detailserv(id: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {   
            tx.executeSql(`select * from ${table} as S inner join ${tablecar} as C on C.id_carro = S.id_carro where S.id_servicos = ?`, [id], (_, { rows }) => {    
                resolve(rows.item(0));
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async delsrv(id: number) {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {   
            tx.executeSql(`delete from ${table} where id_servicos = ?`, [id], (_, { rows }) => {
                resolve(rows);
                UploadDB()
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }

    static async SevicesNoRealized() {
        const db = await dbConnection();
        return new Promise((resolve, reject) => db.transaction(tx => {   
            tx.executeSql(`select S.id_servicos, S.nome, S.local, S.data, S.status_servico, C.modelo, C.marca from ${table} as S inner join Carros as C on S.id_carro = C.id_carro where status_servico = 0 order by data desc limit 2`, [], (_, { rows }) => {    
                resolve(rows);
            }), (sqlError: any) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);
        }))
    }


}