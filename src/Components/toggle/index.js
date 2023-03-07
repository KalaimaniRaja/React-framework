import React, { useEffect, useState } from "react";
import "./toggle.scss";

function Toggle() {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  };

  useEffect(() => {
    console.log("check", check);
  }, [check]);
  return (
    <label className={`toggle-button ${check ? "active" : ""}`}>
      <input type="checkbox" onClick={() => toggleCheck()} />
    </label>
  );
}

export default Toggle;
