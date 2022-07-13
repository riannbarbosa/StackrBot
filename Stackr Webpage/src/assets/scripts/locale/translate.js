import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translateEnglish = {
  desc: "Yet another helper Discord bot",
  about: "About Stackr",
  aboutP: "About Project",
  footer1: "Project on Github",
  footer2: "Privacy Policy",
  footer3: "Icons made by ",
  footer4: " and ",
  footer5: " from ",
  footer6: " Terms of use ",
  labelButton:"Add me to Discord!",
  labelTitle: "For developers!",
  labelsubT:"Created specially for the dev community, don't miss out and add to your group! " ,
  labelTitle2: "Get easily answers from Stackoverflow through Discord!",
  labelsubT2: "Stackr give you an easy way to get all possible answers from Stackoverflow's site!", 
};

const translatePortuguese = {
  desc: "Apenas outro bot de ajuda para Discord",
  about: "Sobre Stackr",
  aboutP: "Sobre o Projeto",  
  footer1: "Projeto no Github",
  footer2: "Política de Privacidade",
  footer3: "Ícones feitos por ",
  footer4: " e ",
  footer5: " de ",
  footer6: " Termos de uso",
  labelButton:"Me adicione ao Discord!",
  labelTitle: "Para desenvolvedores que querem",
  labelsubT:"Criado especialmente para a comunidade dev, não perca e adicione ao seu grupo!",
  labelTitle2: "Obtenha respostas facilmente do Stackoverflow através do Discord!",
  labelsubT2: "Stackr oferece uma maneira fácil de obter todas as respostas possíveis do Stackoverflow!", 
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translateEnglish },
    pt: { translation: translatePortuguese },
  },
  lgn: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
