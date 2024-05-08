import { executeTransaction } from "../Database"
import IDrink from "../../src/interfaces/Drinks"
import IDrinks from "../../src/interfaces/IDrinks"
export default class DrinkRepository{
    constructor(){
        this.up()
    }
    private async up(){
        const data = await executeTransaction(
            "CREATE TABLE IF NOT EXISTS drinks(id integer primary key, value double)"
        )
        //inserir dados iniciais caso a tabela tenha sido criada
        
        console.log("Alteração na tabela drinks; ")
        console.log(data)
       
    }
    public async create(drink:IDrink){
        const sqlReturn = await executeTransaction(
            "INSERT INTO user(id, value) VALUES(?,?)",
            [drink.id, drink.value]
        )

        return sqlReturn
    }
    public async all(){
        const data = await executeTransaction("SELECT * FROM drinks")
        //console.log(data.rows)
        return data.rows._array
    }
    public async down(){
        await executeTransaction("DROP TABLE drinks")
    }
}

