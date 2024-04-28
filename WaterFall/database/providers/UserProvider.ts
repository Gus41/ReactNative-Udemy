import { executeTransaction } from "../Database"

export type User = {
    id?:number,
    name:string,
    age:number
}

export default class UserRepository{
    constructor(){
        this.up()
    }
    private async up(){
        const data = await executeTransaction(
            "CREATE TABLE IF NOT EXISTS user(id integer primary key, name text, sex text, height double,weight double)"
        )
        console.log("Tabela atualizada")
    }
    public async create(user:User){
        //console.log(user)
        const sqlReturn = await executeTransaction(
            "INSERT INTO user(id, name, age) VALUES(?,?,?)",
            [user.id,user.name,user.age]
        )

        return sqlReturn
    }
    public async all(){
        const data = await executeTransaction("SELECT * FROM user")
        //console.log(data.rows)
        return data.rows._array
    }
    public async down(){
        await executeTransaction("DROP TABLE user")
    }
}

