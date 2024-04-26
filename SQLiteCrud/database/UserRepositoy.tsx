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
        const data = await executeTransaction(
            "CREATE TABLE IF NOT EXISTS users(id integer primary key, name text, age integer)"
        )
    }
    public async create(user:User){
        console.log(user)
        await executeTransaction(
            "INSERT INTO users(id, name, age) VALUES(?,?,?)",
            [user.id,user.name,user.age]
        )
    }
    public async all(){
        const data = await executeTransaction("SELECT * FROM users")
        console.log(data.rows)
        return data.rows._array
    }
    public static async delete(id:number){
        const data = await executeTransaction("DELETE FROM users WHERE id=?",[id])
        return data.rowsAffected
    }
}