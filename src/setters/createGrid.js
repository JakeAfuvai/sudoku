import { createSubGrid } from "./createSubGrid"

export const createGrid = () => {
    let grids = []
    const prefix = ["a","b","c","d","e","f","g","h","i"]
        
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const obj = {
                key: `${prefix[i]}${(j + 1).toString()}`,
                tile: i + 1,
                cell: j + 1,
                value: 0,
                subGrid: createSubGrid(`${(i + 1).toString()}-${(j + 1).toString()}`)
            }
            grids = [...grids, obj]
        }
    }
    return grids
}