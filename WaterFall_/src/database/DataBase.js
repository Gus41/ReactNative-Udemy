import * as SQLite from 'expo-sqlite'

export const DabataseConnection = {
    getConnection : ()=> SQLite.openDatabase("database.db")   
}