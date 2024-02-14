import { useState } from "react";
import "./App.css";
import StocksCarousel from "./components/TopPageStockData/StocksCarousel";
import GLContainer from "./components/SideStockData/GLContainer";
import Dashboard from "./components/dashboard";
import TopsHeadlines from "./components/News/Topheadlines";
import Modal from "./components/GlobalComponents/Modal";
import Navbar from "./components/Navbar/Navbar"


function App() {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Navbar news={news} setNews={setNews}></Navbar>
      <Dashboard news={news} setNews={setNews}/>
      {/* <StocksLanding />
      <GLContainer /> */}
      <TopsHeadlines />
    </>
  )
}

export default App;
