//literalmente uma matriz de objetos

const createBoard = (rows,columns)=>{
    return Array(rows).fill(0).map((_,row)=>{
        return Array(columns).fill(0).map((_,column)=>{
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined:false,
                exploded:false,
                nearMines:0
            }
        })
    })
}
//espalha minas de maneira randomica
const spreadMines = (board,minesAmount)=>{
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while(minesPlanted < minesAmount){
        const rowSelecioned = parseInt(Math.random() * rows,10)
        const columnSelecioned = parseInt(Math.random()* columns,10)

        if( !board[rowSelecioned][columnSelecioned].mined ){
            board[rowSelecioned][columnSelecioned].mined = true
            minesPlanted++
        }
    }
}
//utiliza as duas funções acima
const createMinedBoard = (rows,columns,minesAmount) =>{
    const board = createBoard(rows,columns)
    spreadMines(board,minesAmount)
    return board
}
export { createMinedBoard}