import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/homePage/HomePage";
import { CoinPage } from "./pages/coinPage/CoinPage";
import styles from "./App.module.scss";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
