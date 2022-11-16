import * as SQLite from 'expo-sqlite';
import { getAuth } from "firebase/auth";
import { FirebaseInit } from '../database/Firebase';
import * as FileSystem from 'expo-file-system';
import { getStorage, ref, uploadBytes } from "firebase/storage";

FirebaseInit();

const storage = getStorage();

async function UID(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getAuth().currentUser?.uid);
        }, 55);
    });
}

export async function dbConnection() {
    const UIDuser = await UID();
    return SQLite.openDatabase(UIDuser + ".db")
};

export async function UploadDB() {
    const UIDuser = await UID();
    const storageRef = ref(storage, "/user/" + UIDuser + "/SQLite/" + UIDuser + ".db");
    const folderInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "/SQLite/" + UIDuser + ".db");
    console.log(folderInfo);
    const blob : Blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", folderInfo.uri, true);
        xhr.send(null);
    });
    uploadBytes(storageRef, blob);
}

//console.log(db);

//console.log("UserID: "+user?.uid)
//console.log(dbConnection.getConnection);