import { DabataseConnection } from "./DataBase";

var db 
export default class DabaseInit{
    constructor(){
        db = DabataseConnection.getConnection()
        db.exec([{sql:'PRAGMA foreign_keys = ON', args:[]}],false,()=>{
            console.log("Foreign Keys on")
        })
    }
    private InitDb(){
        var sql = [
            `create table if not exists animal (
                id integer primary key autoincrement,
                nome text);`,
            `insert into animal(1,'teste')`
        ]

        db.transaction(
            tx=>{
                for(let i = 0 ; i < sql.length ; i ++){
                    console.log("Executando: " + sql[i])
                    tx.executeSql(sql[i])
                }
            },(error)=>{
                console.log(error)
            },()=>{
                console.log("Succes")
            }
        )
    }
}