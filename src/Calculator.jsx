import React, {useState} from "react";
import styles from "./Calculator.module.css";

const Calculator = () =>
{
  const [data, setData] = useState("");
  const [result, setResult] = useState(null);

  function getData(event){
      setData(data.concat(event.target.value));
  }

  function clearAll(){
    setData("");
    setResult("");
  }

  function getResult(){
    if(data===""){
      setResult("Error");
    }
    else{
       // eslint-disable-next-line no-eval
       setResult(eval(data));
    }
   
  }

  return (
      <div className={styles.calc_wrap} >
      <h1>React Calculator</h1>
      <input type="text" value={data}/>
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
  );}

export default Calculator;