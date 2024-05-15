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
    public async create(day:IDay){
        const sqlReturn = await executeTransaction(
            "INSERT INTO historic(id, value,data) VALUES(?,?,?)",
            [day.id, day.amount, day.date.toDateString()]
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

