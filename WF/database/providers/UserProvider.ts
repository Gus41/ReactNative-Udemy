import { executeTransaction } from "../Database"

export type User = {
    id?:number,
    name:string,
    age:number,
    sex:string,
    height:number,
    weight:number
}

export default class UserRepository{
    constructor(){
        this.up()
    }
    private async up(){
        const data = await executeTransaction(
            "CREATE TABLE IF NOT EXISTS user(id integer primary key, name text, sex text, height double,weight double)"
        )
       
    }
    public async create(user:User){
        //console.log(user)
        const sqlReturn = await executeTransaction(
            "INSERT INTO user(id, name, sex, height, weight ) VALUES(?,?,?,?,?)",
            [user.id,user.name,user.sex,user.height,user.weight]
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

