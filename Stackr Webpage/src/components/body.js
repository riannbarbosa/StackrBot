import "../assets/style/body.css";
import React, { Suspense } from "react";
import img1 from "../assets/images/programming-language.png";
import img2 from "../assets/images/layers.png";
import "../assets/scripts/locale/translate.js";
import { useTranslation } from "react-i18next";
import "../assets/scripts/scroll/scroll.js";
import { Link } from "react-router-dom";

function Action() {
  const redirect =
    "https://discord.com/api/oauth2/authorize?client_id=958365985927200810&scope=applications.commands";
    let windowFeatures = "width=550, height=800";
  window.open(redirect, 'mywindow', windowFeatures);
}
function Body() {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Loading...">
      <div id="container">
        <div className="content-1">
          <h1 className="main">Stackr</h1>
          <p>{t("desc")}</p>
          <div className="wrapper">
            <button className="b2" onClick={Action}>
              {t("labelButton")}
            </button>
          </div>
        </div>
        <hr />
        <div className="content-2">
          <div className="text-container">
            <h1>{t("labelTitle")}</h1>
            <div className="text-cont2">{t("labelsubT")}</div>
          </div>
          <div className="img">
            <img
              className="img-display"
              src={img1}
              alt="programming-symbol"
            ></img>
          </div>
        </div>
        <div className="content-3">
          <div className="text-container-2">
            <h1>{t("labelTitle2")}</h1>
            <div className="text-cont3">{t("labelsubT2")}</div>
          </div>
          <div className="img2">
            <img
              className="img-display2"
              src={img2}
              alt="programming-symbol2"
            ></img>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Body;
