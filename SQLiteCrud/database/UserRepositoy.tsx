import { executeTransaction } from "./SQLDatabase"

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
        await executeTransaction(
            "CREATE TABLE IF NOT EXISTS users(id integer primary key, name text, age integer)"
        )
        console.log("Tabela criada")
    }
    public async create(user:User){
        await executeTransaction(
            "insert into users(id, name, age) values (?,?,?)",
            [user.id,user.name,user.age]
        )
    }
    public async all(){
        const data = await executeTransaction("SELECT * FROM users")
        console.log(data)
        return data.rows._array
    }
}