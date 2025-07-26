import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
