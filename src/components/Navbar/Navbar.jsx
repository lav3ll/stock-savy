import { useState } from "react"
import Searchbar from "./Searchbar"
import SearchResultsList from "./SearchResultsList"
import Modal from "./Modal"

export default function Navbar({news, setNews, setFiftyDayAverage, setStockName, setExchange, setMarketCap}) {

const [results, setResults] = useState([])

const [display, setDisplay] = useState(true)

    console.log(display)

    return (
        <nav className="my-nav bg-indigo-900 text-white flex justify-between items-center gap-8 p-4">
            <div className="flex gap-5 my-logo flex-grow">
                <img src="/stocksavvy-logo-1.jpg" alt="" className="h-10 rounded-xl"/>
                <a href="/" className="my-site text-3xl">Stock Savvy</a>
            </div>
            <div className="searchbar-container">
                <Searchbar news={news} setNews={setNews} setResults={setResults} display={display} setDisplay={setDisplay}/>
                <SearchResultsList results={results} setFiftyDayAverage={setFiftyDayAverage} setStockName={setStockName} setMarketCap={setMarketCap} setExchange={setExchange} display={display} setDisplay={setDisplay} />
            </div>
            <ul className="flex gap-8 flex-grow">
                <li><a href="/">Home</a></li>
                <li><Modal></Modal></li>
            </ul>
        </nav>
    )
}