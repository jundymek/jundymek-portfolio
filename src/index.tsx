import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import ReactGA from "react-ga"
ReactGA.initialize("UA-163661685-1")

const container = document.getElementById("root")
const root = createRoot(container as HTMLElement)

ReactGA.pageview(window.location.pathname + window.location.search)
root.render(<App />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
