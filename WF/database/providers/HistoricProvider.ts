import { executeTransaction } from "../Database"
import IDay from "../../src/interfaces/IDay"
export default class HistoricRepository{
    constructor(){
        this.up()
    }
    private async up(){
        const data = await executeTransaction(
            "CREATE TABLE IF NOT EXISTS historic(id integer primary key, value double, data Date)"
        )
        
        console.log("Alteração na tabela historic; ")
        console.log(data)
       
    }
    private formatDateToSql(date:Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda se necessário
        const day = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
        
        // Formata a data no formato SQL (YYYY-MM-DD)
        const formattedDate = `${year}-${month}-${day}`;
        
        return formattedDate;
    }

    public async create(day:IDay){

        const data = this.formatDateToSql(day.date)
        const dayToSql = {
         id:day.id,
         date:data,
         amount:day.amount
        }

        
        const sqlReturn = await executeTransaction(
            "INSERT INTO historic(id, value,data) VALUES(?,?,?)",
            [dayToSql.id, dayToSql.amount, dayToSql.date]
        )
        
        return sqlReturn
    }
    public async all(){
        const data = await executeTransaction("SELECT * FROM historic")
        //console.log(data.rows)
        return data.rows._array
    }
    public async down(){
        await executeTransaction("DROP TABLE historic")
    }
}

