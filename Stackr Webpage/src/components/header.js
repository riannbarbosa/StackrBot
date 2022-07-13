import "../assets/style/header.css";
import React from "react";
import logo from "../assets/images/icon.png";
import i18n from "i18next";


const onCLick = (event) => {
  i18n.changeLanguage(event.target.value);
};
function changebck(btn){
  btn.style.backgroundColor = "white";
}

function Header() {
  return (
    <div>
      <header>
        <nav>
          <div id="logo">
            <img src={logo} alt="logo" id="icon" />

            <h2 id="title">Stackr</h2>
          </div>
          <div id="button">
            <button onClick={onCLick} value="pt" >
              PT
            </button>
            <button onClick={onCLick} value="en">
              EN
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
