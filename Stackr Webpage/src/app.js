import React from "react";
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";
import "./app.css";

export default function App() {
  return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
  );
}
