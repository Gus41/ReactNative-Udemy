import IDay from "./IDay";

export default interface IAtualDay {
    amount:number,
    date:Date,
    historic:Array<IDay>
}