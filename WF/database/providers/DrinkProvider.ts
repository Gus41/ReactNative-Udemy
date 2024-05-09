import { executeTransaction } from "../Database"
import IDrink from "../../src/interfaces/Drinks"

export default class DrinkRepository{
    constructor(){
        this.up()
    }
    private async up(){
        const data = await executeTransaction(
            "CREATE TABLE IF NOT EXISTS drinks(id integer primary key, value double)"
        )
        
        console.log("Alteração na tabela drinks; ")
        console.log(data)
       
    }
    public async create(drink:IDrink){
        const sqlReturn = await executeTransaction(
            "INSERT INTO drinks(id, value) VALUES(?,?)",
            [drink.id, drink.value]
        )

        return sqlReturn
    }
    public async all(){
        const data = await executeTransaction("SELECT * FROM drinks")
        //console.log(data.rows)
        return data.rows._array
    }
    public async update(id:number,value:number){
        const data = await executeTransaction(`UPDATE drinks SET value = ? WHERE id = ${id}`,
            [value]
        )
    }
    public async getById(id:number){
        const data = await executeTransaction(`select * from drinks where id =  ${id}`)
        console.log(data.rows._array)
        return data.rows._array
    }
    public async down(){
        await executeTransaction("DROP TABLE drinks")
    }
}

