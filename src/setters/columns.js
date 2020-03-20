export const columns = grid => {
    let columns = []
    let columnOne = []
    let columnTwo = []
    let columnThree = []
    let columnFour = []
    let columnFive = []
    let columnSix = []
    let columnSeven = []
    let columnEight = []
    let columnNine = []
    
    for (let i = 0; i < grid.length; i++) {
        switch (grid[i].key) {
            case "a1":
            case "a4":
            case "a7":
            case "d1":
            case "d4":
            case "d7":
            case "g1":
            case "g4":
            case "g7":
                columnOne = [...columnOne, grid[i]]
                break;
            case "a2":
            case "a5":
            case "a8":
            case "d2":
            case "d5":
            case "d8":
            case "g2":
            case "g5":
            case "g8":
                columnTwo = [...columnTwo, grid[i]]
                break;
            case "a3":
            case "a6":
            case "a9":
            case "d3":
            case "d6":
            case "d9":
            case "g3":
            case "g6":
            case "g9":
                columnThree = [...columnThree, grid[i]]
                break;
            case "b1":
            case "b4":
            case "b7":
            case "e1":
            case "e4":
            case "e7":
            case "h1":
            case "h4":
            case "h7":
                columnFour = [...columnFour, grid[i]]
                break;
            case "b2":
            case "b5":
            case "b8":
            case "e2":
            case "e5":
            case "e8":
            case "h2":
            case "h5":
            case "h8":
                columnFive = [...columnFive, grid[i]]
                break;
            case "b3":
            case "b6":
            case "b9":
            case "e3":
            case "e6":
            case "e9":
            case "h3":
            case "h6":
            case "h9":
                columnSix = [...columnSix, grid[i]]
                break;
            case "c1":
            case "c4":
            case "c7":
            case "f1":
            case "f4":
            case "f7":
            case "i1":
            case "i4":
            case "i7":
                columnSeven = [...columnSeven, grid[i]]
                break;
            case "c2":
            case "c5":
            case "c8":
            case "f2":
            case "f5":
            case "f8":
            case "i2":
            case "i5":
            case "i8":
                columnEight = [...columnEight, grid[i]]
                break;
            default:
                columnNine = [...columnNine, grid[i]]
        }
    }
    columns = [columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven, columnEight, columnNine]
    return columns
}