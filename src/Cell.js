import React, {useState, useEffect} from "react"
import CellGrid from "./CellGrid"

const Cell = props => {
    const {cell} = props
    const [previews, setPreviews] = useState([])
    
    useEffect(() => {
        for (let i = 0; i < 9; i++) {
            const preview = {preview: i + 1, val: i + 1}

            setPreviews(prevPreviews => [...prevPreviews, preview])
        }
    }, [])

    const displayPreviewCells = previews.map(preview =>
        <CellGrid key={preview.preview} preview={preview} />     
    )

    return (
        <div 
            className="cell-container"
        >
            {displayPreviewCells} 
        </div>
    )
}

export default Cell