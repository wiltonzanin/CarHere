import * as SQLite from 'expo-sqlite';

export const dbConnection = {
    getConnection: () => SQLite.openDatabase("database.db"),
};