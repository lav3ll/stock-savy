import { useState } from "react";
import "./App.css";
import StocksCarousel from "./components/TopPageStockData/StocksCarousel";
import GLContainer from "./components/SideStockData/GLContainer";
import Dashboard from "./components/dashboard";
import TopsHeadlines from "./components/News/Topheadlines";
import Modal from "./components/GlobalComponents/Modal";
import Navbar from "./components/Navbar/Navbar"
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";



function App() {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fiftyDayAverage, setFiftyDayAverage] = useState(null)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Navbar news={news} setNews={setNews} setFiftyDayAverage={setFiftyDayAverage}></Navbar>
      <Dashboard news={news} setNews={setNews} fiftyDayAverage={fiftyDayAverage}/>
    </>
  );
}

export default App;
