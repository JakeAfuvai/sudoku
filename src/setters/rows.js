export const rows = grid => {
    let rows = []
    let rowOne = []
    let rowTwo = []
    let rowThree = []
    let rowFour = []
    let rowFive = []
    let rowSix = []
    let rowSeven = []
    let rowEight = []
    let rowNine = []
    
    for (let i = 0; i < grid.length; i++) {
        switch (grid[i].key) {
            case "a1":
            case "a2":
            case "a3":
            case "b1":
            case "b2":
            case "b3":
            case "c1":
            case "c2":
            case "c3":
                rowOne = [...rowOne, grid[i]]
                break;
            case "a4":
            case "a5":
            case "a6":
            case "b4":
            case "b5":
            case "b6":
            case "c4":
            case "c5":
            case "c6":
                rowTwo = [...rowTwo, grid[i]]
                break;
            case "a7":
            case "a8":
            case "a9":
            case "b7":
            case "b8":
            case "b9":
            case "c7":
            case "c8":
            case "c9":
                rowThree = [...rowThree, grid[i]]
                break;
            case "d1":
            case "d2":
            case "d3":
            case "e1":
            case "e2":
            case "e3":
            case "f1":
            case "f2":
            case "f3":
                rowFour = [...rowFour, grid[i]]
                break;
            case "d4":
            case "d5":
            case "d6":
            case "e4":
            case "e5":
            case "e6":
            case "f4":
            case "f5":
            case "f6":
                rowFive = [...rowFive, grid[i]]
                break;
            case "d7":
            case "d8":
            case "d9":
            case "e7":
            case "e8":
            case "e9":
            case "f7":
            case "f8":
            case "f9":
                rowSix = [...rowSix, grid[i]]
                break;
            case "g1":
            case "g2":
            case "g3":
            case "h1":
            case "h2":
            case "h3":
            case "i1":
            case "i2":
            case "i3":
                rowSeven = [...rowSeven, grid[i]]
                break;
            case "g4":
            case "g5":
            case "g6":
            case "h4":
            case "h5":
            case "h6":
            case "i4":
            case "i5":
            case "i6":
                rowEight = [...rowEight, grid[i]]
                break;
            default:
                rowNine = [...rowNine, grid[i]]
        }
    }
    rows = [rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine]
    return rows
}