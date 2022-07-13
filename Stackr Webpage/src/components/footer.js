import "../assets/style/footer.css";
import React from "react";
import "../assets/scripts/locale/translate.js";
import i18n from "i18next";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

const onCLick = (event) => {
  i18n.changeLanguage(event.target.value);
};
function Footer() {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Loading...">
      <footer>
        <div id="wrapper">
          <li>
            <h2>{t("aboutP")}</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/riannbarbosa/StackrBot"
                  target="blank"
                  title="Github"
                >
                  {t("footer1")}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2>{t("about")}</h2>
            <ul>
              <li>
                <Link to="/privacy" target="blank">{t("footer2")}</Link>
              </li>
              <li>
                <Link to="/terms" target="blank">{t("footer6")}</Link>
              </li>
              
            </ul>
          </li>
        </div>

        <p className="copy"> &copy; 2022 Rian Barbosa </p>
        <p className="copy2">
          {t("footer3")}
          <a
            href="https://www.flaticon.com/free-icons/stack"
            title="icons"
            target="blank"
          >
            bukeicon
          </a>
          {t("footer4")}
          <a
            href="https://www.flaticon.com/free-icons/program"
            title="icons"
            target="blank"
          >
            Bombasticon
          </a>
          {t("footer5")}
          <a href="https://www.flaticon.com" title="site" target="blank">
            www.flaticon.com
          </a>
        </p>
      </footer>
    </Suspense>
  );
}

export default Footer;
