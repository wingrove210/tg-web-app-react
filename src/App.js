import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
// import ProductItem from "./components/ProductItem/ProductItem";
import FormComponent from "./components/Form/Form"; // Your custom form component

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<FormComponent />} />
      </Routes>
    </div>
  );
}

export default App;
