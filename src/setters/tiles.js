export const tiles = grid => {
    let tiles = []
    let tileOne = []
    let tileTwo = []
    let tileThree = []
    let tileFour = []
    let tileFive = []
    let tileSix = []
    let tileSeven = []
    let tileEight = []
    let tileNine = []
    
    for (let i = 0; i < grid.length; i++) {
        switch (grid[i].key) {
            case "a1":
            case "a2":
            case "a3":
            case "a4":
            case "a5":
            case "a6":
            case "a7":
            case "a8":
            case "a9":
                tileOne = [...tileOne, grid[i]]
                break;
            case "b1":
            case "b2":
            case "b3":
            case "b4":
            case "b5":
            case "b6":
            case "b7":
            case "b8":
            case "b9":
                tileTwo = [...tileTwo, grid[i]]
                break;
            case "c1":
            case "c2":
            case "c3":
            case "c4":
            case "c5":
            case "c6":
            case "c7":
            case "c8":
            case "c9":
                tileThree = [...tileThree, grid[i]]
                break;
            case "d1":
            case "d2":
            case "d3":
            case "d4":
            case "d5":
            case "d6":
            case "d7":
            case "d8":
            case "d9":
                tileFour = [...tileFour, grid[i]]
                break;
            case "e1":
            case "e2":
            case "e3":
            case "e4":
            case "e5":
            case "e6":
            case "e7":
            case "e8":
            case "e9":
                tileFive = [...tileFive, grid[i]]
                break;
            case "f1":
            case "f2":
            case "f3":
            case "f4":
            case "f5":
            case "f6":
            case "f7":
            case "f8":
            case "f9":
                tileSix = [...tileSix, grid[i]]
                break;
            case "g1":
            case "g2":
            case "g3":
            case "g4":
            case "g5":
            case "g6":
            case "g7":
            case "g8":
            case "g9":
                tileSeven = [...tileSeven, grid[i]]
                break;
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
            case "h7":
            case "h8":
            case "h9":
                tileEight = [...tileEight, grid[i]]
                break;
            default:
                tileNine = [...tileNine, grid[i]]
        }
    }
    tiles = [tileOne, tileTwo, tileThree, tileFour, tileFive, tileSix, tileSeven, tileEight, tileNine]
    return tiles
}