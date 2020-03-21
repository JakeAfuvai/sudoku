import React from "react"
import ReactDOM from "react-dom"
import { ContextProvider } from "./Context/Context"
import App from "./AppComponents/App"

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
, document.getElementById("root"))