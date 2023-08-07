import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title = "textUtils" aboutText = "About TextUtils" />
        <Navbar /> */}
      <Router>
        
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word counter, character counter, remove extra spaces"
                mode={mode}
              />} />
            </Routes>
          {/* <About/> */}
        </div>
        
      </Router>
    </>
  );
}

export default App;
