import { dbConnection } from '../dbConnection';

const table = "usuarios"
const db = dbConnection.getConnection()

export default class UsuarioService {

    /*
    static addUser(nome: string, email: string, senha: string) {

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.uid);
                console.log(nome);
                return user.uid
                // ...
            })
            .catch((error) => {
                return error.code
                //const errorCode = error.code;
                //const errorMessage  = error.message;
                
                // ..
            });

    }
    */
    /*
        static addUser(nome: string, email: string, senha: string) {
            return new Promise((resolve, reject) => db.transaction(tx => {
                tx.executeSql(`insert into ${table} (nome, email, senha, data_criacao) values (?, ?, ?, date())`,
                    [nome, email, senha], (_, { insertId, rows }) => {
                        resolve(insertId)
                        console.log(insertId)
                        console.log(rows)
                    }), (sqlError: any) => {
                        console.log(sqlError);
                    }
            }, (txError) => {
                console.log(txError);
            }))  
        }
    */
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

