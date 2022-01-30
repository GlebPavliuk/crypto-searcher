import "./App.css";
import { useEffect, useState, memo } from "react";
import Axios from "axios";
import Coin from "./components/Coin";
import HeaderImg from "./components/HeaderImg";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const getCryptoCoins = () => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response) => {
      setListOfCoins(response.data.coins);
    });
  };

  useEffect(() => {
    getCryptoCoins();
    setInterval(() => {
      getCryptoCoins();
    }, 2000);
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => coin.name.toLowerCase().includes(searchWord.toLowerCase()));

  return (
    <div className="App">
      <div className="cryptoHeader">
        <HeaderImg />
        <div className="crypto-header-wrapper">
          <div className="my-text">Welcome to Traders Education Cryptocurrency search panel!</div>
          <input
            type="text"
            placeholder="Bitcoin..."
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map(({ name, icon, price, symbol, marketCap }) => (
          <Coin key={name} name={name} icon={icon} price={price} symbol={symbol} marketCap={marketCap} />
        ))}
      </div>
    </div>
  );
}

export default memo(App);
