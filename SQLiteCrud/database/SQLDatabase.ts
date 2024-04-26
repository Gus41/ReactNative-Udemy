import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase("database.db")

export const executeTransaction = (sql:string,values?: (number|string|null)[]) =>{
    return new Promise<SQLite.SQLResultSet>((resolve,reject)=>{
        db.transaction( (tx)=>{
            tx.executeSql(
                sql,
                values,
                (_,resultSet) =>{
                    resolve(resultSet)
                },
                (_,error)=>{
                    console.log(error)
                    reject(error)
                    return true
                }
            )
        })
    })

}