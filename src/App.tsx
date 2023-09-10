import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/homePage/HomePage";
import { CoinsPage } from "./pages/coinsPage/CoinsPage";
import styles from "./App.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
