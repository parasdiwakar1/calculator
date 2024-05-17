import React, { useState } from 'react';
import "./App.css";

function App() {
  const [calc, setCalc] = useState({ input: "", result: "" });

  const vhandler = (e) => {
    setCalc({ ...calc, input: calc.input + e.target.value, result: "" });
  };

  const backspace = () => {
    setCalc({ ...calc, input: calc.input.slice(0, -1) });
  };

  const clear = () => {
    setCalc({ input: "", result: "" });
  };

  const calculate = () => {
    try {
      setCalc({ ...calc, result: eval(calc.input).toString() });
    } catch (error) {
      setCalc({ ...calc, result: "Error" });
    }
  };

  return (
    <div className='main'>
      <div className='box'>
        <div className='btnbox'>
          <input type="text" placeholder='0' value={calc.result || calc.input} readOnly />
          
          <div>
            <button className='function' onClick={clear}>C</button>
            <button className='function' onClick={vhandler} value="%">%</button>
            <button className='function' onClick={backspace}>back</button>
            <button className='function' onClick={vhandler} value="/">/</button>
          </div>
          <div>
            <button className='num' onClick={vhandler} value="7">7</button>
            <button className='num' onClick={vhandler} value="8">8</button>
            <button className='num' onClick={vhandler} value="9">9</button>
            <button className='function' onClick={vhandler} value="*">*</button>
          </div>
          <div>
            <button className='num' onClick={vhandler} value="4">4</button>
            <button className='num' onClick={vhandler} value="5">5</button>
            <button className='num' onClick={vhandler} value="6">6</button>
            <button className='function' onClick={vhandler} value="-">-</button>
          </div>
          <div>
            <button className='num' onClick={vhandler} value="1">1</button>
            <button className='num' onClick={vhandler} value="2">2</button>
            <button className='num' onClick={vhandler} value="3">3</button>
            <button className='function' onClick={vhandler} value="+">+</button>
          </div>
          <div className='last'>
            <button className='num' onClick={vhandler} value="0">0</button>
            <button className='num' onClick={vhandler} value=".">.</button>
            <button className='function' onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
