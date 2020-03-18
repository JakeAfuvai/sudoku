import React, { useState, useEffect } from "react"
import Cell from "./Cell"

const Tile = props => {
    const { tile } = props
    const [cells, setCells] = useState([])
    
    useEffect(() => {
        for (let i = 0; i < 9; i++) {
            const cell = {cell: i + 1, val: i + 1}

            setCells(prevCells => [...prevCells, cell])
        }
    }, [])

    const displayCells = cells.map(cell =>
        <Cell key={cell.cell} cell={cell} /> 
    )

    return (
        <div className="tile-container">
            {/* <h1 style={{position: "absolute"}}>{tile.tile}</h1> */}
            {displayCells}            
        </div>  
    )
}

export default Tile