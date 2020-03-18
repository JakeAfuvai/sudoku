import React, {useState} from "react"

const CellGrid = props => {
    const {preview} = props
    const [previewCell, setPreviewCell] = useState(false)
    const [showCell, setShowCell] = useState(false)
    const display = showCell || previewCell ? <p style={{width: "15pt", height: "15pt", background: "rgba(0,0,0,0.05)"}}>{preview.preview}</p> : <p style={{width: "15pt", height: "15pt", background: "rgba(0,0,0,0.05)"}}></p>
    return(
        <div 
            className="cell-preview-container"
            onMouseEnter={() => setPreviewCell(true)} 
            onMouseLeave={() => setPreviewCell(false)}
            onClick={() => setShowCell(prevState => !prevState)}
        >
            {display}
        </div>
    )
}

export default CellGrid