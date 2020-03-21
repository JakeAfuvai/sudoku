import React, { useState, useEffect, useContext } from "react"
import "../App.css"
import { Context } from "../Context/Context"

const App = props => {
    // global context state
    const { 
        sudokuGrid,
        sudokuTiles,
        sudkokuColumns,
        sudokuRows 
    } = useContext(Context)
    // global context state methods
    const { setSudokuGrid, setSudokuTiles, setSudokuColumns, setSudokuRows } = useContext(Context)

    const [ showPreview, setShowPreview ] = useState(false)
    const [ lockPreview, setLockPreview ] = useState(false)

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
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
            onClick={() => setLockPreview(prevState => !prevState)}
        >
            {subCell.value}
        </p>   
    ))

    // change !true and !== 0 to change to preview style mode
    const cellStyle = !true ? "value" : "preview"

    const displayGrid = sudokuGrid.map(cell => 
        cell.value !== 0 ?
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

    return (
        <div className="app-container">
            {displayGrid}
        </div>
    )
}

export default App