import React, { useState } from "react"
import { createGrid } from "../setters/createGrid"
import { tiles } from "../setters/tiles"
import { columns } from "../setters/columns"
import { rows } from "../setters/rows"
const Context = React.createContext()

const ContextProvider = props => {
    // add global context state & state methods here
    const [ sudokuGrid, setSudokuGrid ] = useState(createGrid())
    const [ sudokuTiles, setSudokuTiles ] = useState(tiles(sudokuGrid))
    const [ sudokuColumns, setSudokuColumns ] = useState(columns(sudokuGrid))
    const [ sudokuRows, setSudokuRows ] = useState(rows(sudokuGrid))

    return (
        <Context.Provider 
            value={{
                //add state here
                sudokuGrid,
                sudokuTiles,
                sudokuColumns,
                sudokuRows,
                // state methods here
                setSudokuGrid,
                setSudokuTiles,
                setSudokuColumns,
                setSudokuRows
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }

// to use this state 'globally':
    // within the component: 
        // import { useContext } from "react"
        // import { Context } from "./Context/Context
        // inside the component function and before return:
            // const { state and state methods } = useContext(Context)

            // state and its methods will now be available within the component

    // inside index.js wrap App component to provide Context state/methods to that component:
        // import { ContextProvider } from "./Context/Context"
        // within index.js ReactDOM render method:
            // <ContextProvider>
                // <App />
            // </ContextProvider>
    