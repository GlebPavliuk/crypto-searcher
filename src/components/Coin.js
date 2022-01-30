import React from "react";

const Coin = ({ name, icon, price, symbol, marketCap }) => (
  <div className="coin">
    <h1> Name: {name} </h1>
    <img src={icon} alt={`${name}-icon`} />
    <h3> Price: {price} $</h3>
    <h3> Symbol: {symbol}</h3>
    <h3> Market Cap: {marketCap} $</h3>
  </div>
);

export default React.memo(Coin);
