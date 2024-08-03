

function validSudoku(board){

    let rows = new Map()
    let cols = new Map()
    let squares = new Map()

    function check(category, r, c){
        let number = board[r][c]
        let squareKey = `${[Math.floor(r/3), Math.floor(c/3)]}`

        switch(category){
            case "row":
                if (!rows.get(r)) rows.set(r, new Set())
                if (rows.get(r).has(number)) return false
                rows.get(r).add(number)
                return true

            case "col":
                if(!cols.has(c)) cols.set(c, new Set())
                if(cols.get(c).has(number)) return false
                cols.get(c).add(number)
                return true

            case "square":
                if(!squares.has(squareKey)) squares.set(squareKey, new Set())
                if(squares.get(squareKey).has(number)) return false
                squares.get(squareKey).add(number)
                return true
        }

    }
    
    for (let r=0; r<board.length; r++){
        for (let c=0; c<board.length; c++){
            let number = board[r][c]
            if(number == ".") continue //this skips the current loop
            if(!check("row",r,c) || !check("col",r,c) || !check("square",r,c)) return false            
        }
    }
    return true

}

function validSudoku_SmartImplementation(board) {
    let seen = new Set();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let number = board[r][c];
            if (number !== '.') {
                let rowKey = `${number} in row ${r}`;
                let colKey = `${number} in col ${c}`;
                let squareKey = `${number} in square ${Math.floor(r / 3)}-${Math.floor(c / 3)}`;
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(squareKey)) {
                    return false;
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(squareKey);
            }
        }
    }
    return true;
}



let board_true= [
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
]

let board_false=[
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","1",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
]

console.log(validSudoku_SmartImplementation(boards))
