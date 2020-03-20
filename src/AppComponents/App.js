import React, { useState, useEffect } from "react"
import "../App.css"
import { createGrid } from "../setters/createGrid"
import { tiles } from "../setters/tiles"
import { columns } from "../setters/columns"
import { rows } from "../setters/rows"

const App = () => {
    const [ sudokuGrid, setSudokuGrid ] = useState([])
    const [ sudokuTiles, setSudokuTiles ] = useState([])
    const [ sudokuColumns, setSudokuColumns ] = useState([])
    const [ sudokuRows, setSudokuRows ] = useState([])

    useEffect(() => {
        const grid = createGrid()
        setSudokuGrid(grid)
        setSudokuTiles(tiles(grid))
        setSudokuColumns(columns(grid))
        setSudokuRows(rows(grid))
    }, [])

    const previewDisplay = sudokuGrid.map(cell => cell.subGrid.map(subCell => 
            <p 
                key={subCell.key}
                style={{
                    gridArea: `${subCell.gridValue}`,
                    fontSize: "8pt",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {subCell.value}
            </p>
        ))
    
    // change !true and !== 0 to change to preview style mode
    const cellStyle = true ? "value" : "preview"

    const displayGrid = sudokuGrid.map(cell => 
        cell.value == 0 ?
        <p 
            key={cell.key}
            className={cellStyle} 
            style={{
                gridArea: `${cell.key}`,
                fontSize: "20pt" 
            }}
        >
            {cell.value}
        </p>
        :
        <div 
            key={cell.key}
            className={cellStyle}
            style={{
                gridArea: `${cell.key}`
            }}
        >{previewDisplay}</div>  
    )

    console.log(sudokuRows)

    return (
        <div className="app-container">
            {displayGrid}
        </div>
    )
}

export default App