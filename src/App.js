import React, {useState, useEffect} from "react"
import Tile from "./Tile"
import "./App.css"

const App = props => {
    const [tiles, setTiles] = useState([])

    useEffect(() => {
        for (let i = 0; i < 9; i++) {
            const tile = {tile: i + 1, val: 0}

            setTiles(prevTiles => [...prevTiles, tile])
        }
    }, [])

    const displayTiles = tiles.map(tile => 
        <Tile key={tile.tile} tile={tile}/>  
    )

    return (
        <div className="app-container">
            {displayTiles}
        </div>
    )
}

export default App