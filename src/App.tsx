import React from "react";
import { Container } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Container>
  );
}

export default App;
