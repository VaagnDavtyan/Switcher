import React, { useState } from "react";
import Switch from "./components/Switch";
import "./styles.css";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
    </div>
  );
};

export default App;
