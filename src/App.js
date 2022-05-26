import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
 import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage /> }/>
      </Routes>
     
    </BrowserRouter>
    </Provider>
  );
}

export default App;