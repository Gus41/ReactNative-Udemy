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

//-----------------------------------------------

const cloneBoard = (board) =>{
    return board.map(rows=>{
        return rows.map(field=>{
            return {...field}
        })
    })
}
//pega todos os vizinhos VALIDOS da posição escolhida
const getNeighbors = (board,row,column)=>{
    const neighbors = []
    const rows = [row -1, row, row+1]
    const cols = [ column -1, column, column +1]
    
    rows.forEach( r =>{
        cols.forEach( c =>{
            const isDiferent = r!==row || c!==column
            const isValidRow = r>=0 && r< board.length
            const isValidColumn = c >=0 && c < board[0].length
            if(isDiferent && isValidColumn && isValidRow){
                neighbors.push(board[r][c])
            }

        })
    })

    return neighbors

}

const isSafeNeighborhood = (board,row,column)=>{
    const safes =(result,neighbor)=> result && neighbor.mined
    return getNeighbors(board,row,column).reduce(safes,true)
}

const openField = (board,row,column)=>{
    const field = board[row][column]
    if(!field.opned){
        field.opned = true
        if(field.mined){
            field.exploded = true
        }else if(isSafeNeighborhood(board,row,column)){
            getNeighbors(board,row,column).forEach(f =>openField(board,f.row,f.column))
        }else{
            const neighborhors = getNeighbors(board,row,column)
            field.nearMines = neighborhors.filter(f => f.mined).length
        }
    }
}
const Allfields = (board)=>{
    return [].concat(...board)
}
const isBoardExploded = (board)=>{
    return Allfields(board).filter(f=>f.exploded).length > 0
}
const pending = (field)=>{
    return (field.mined && !field.flagged) 
    || (!field.mined && !field.opened)
}
const wonGame = (board)=>{
    return Allfields(board).filter(pending).length === 0
}
const ShowMines = (board)=>{
    Allfields(board).filter(f=>f.mined).forEach(f=>f.opened = true)
}
export { 
    createMinedBoard,
    cloneBoard,
    openField,
    ShowMines,
    isBoardExploded,
    wonGame,
    openField
}