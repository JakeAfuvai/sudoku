export const createSubGrid = key => {
    const values = ["a","b","c","d","e","f","g","h","i"]

    let subGrid = []
    for (let i = 0; i < 9; i++) {
        const obj = {
            key: `${key}-${i + 1}`,
            gridValue: values[i],
            value: i + 1
        }
        subGrid = [...subGrid, obj]
    }
        return subGrid
}