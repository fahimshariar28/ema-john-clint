import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Header/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
