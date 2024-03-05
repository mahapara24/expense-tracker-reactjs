import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/tracker/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Routes>
        <Route path="/" exact element={<Auth />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </div>
  );
}

export default App;
