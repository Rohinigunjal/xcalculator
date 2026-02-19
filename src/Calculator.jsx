import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState(null);

  function getData(event) {
    setData(prev => prev + event.target.value);
  }

  function clearAll() {
    setData("");
    setResult(null);
  }
  function getResult() {
    if (!data) {
      setResult("Error");
      return;
    }

    try {
      const safe = data.replace(/[^0-9+\-*/().\s]/g, "");
      const fn = new Function(`"use strict"; return (${safe})`);
      const value = fn();

      if (typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)) {
        setResult("Error");
      } else {
        setResult(value);
      }
    } catch (e) {
      setResult("Error");
    }
  }

  return (
    <div className={styles.calc_wrap}>
      <h1>React Calculator</h1>
      <input type="text" value={data} readOnly />
      <div className={styles.res}>{result}</div>
      <div className={styles.btn_wrap}>
        <button onClick={getData} value="7">7</button>
        <button onClick={getData} value="8">8</button>
        <button onClick={getData} value="9">9</button>
        <button onClick={getData} value="+">+</button>

        <button onClick={getData} value="4">4</button>
        <button onClick={getData} value="5">5</button>
        <button onClick={getData} value="6">6</button>
        <button onClick={getData} value="-">-</button>

        <button onClick={getData} value="1">1</button>
        <button onClick={getData} value="2">2</button>
        <button onClick={getData} value="3">3</button>
        <button onClick={getData} value="*">*</button>

        <button onClick={clearAll}>C</button>
        <button onClick={getData} value="0">0</button>
        <button onClick={getResult}>=</button>
        <button onClick={getData} value="/">/</button>
      </div>
    </div>
  );
};

export default Calculator;
