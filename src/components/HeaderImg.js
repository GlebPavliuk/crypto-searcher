import React from "react";
import traderslogo from "../images/traderslogo.jpg";

const HeaderImg = () => <img className="traders-logo" src={traderslogo} alt="Logo" />;

export default React.memo(HeaderImg);
