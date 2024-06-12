import { useState } from "react";
import "./styles/_global.sass";

function App() {
  const [result, setResult] = useState("");
  const [temp, setTemp] = useState("");

  const handleClick = (e) => {
    const name = e.target.name;
    if (name === "quadrate") {
      setTemp(Math.sqrt(parseFloat(temp)));
    } else if (name === "percent") {
      setTemp(parseFloat(temp) / 100);
    } else {
      setTemp(temp.concat(name));
    }
  };

  const clear = () => {
    setResult("");
    setTemp("");
  };

  const calculate = () => {
    try {
      setResult(eval(temp).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-output">
        <input
          readOnly
          value={result}
          className="calculator-output-result"
          type="text"
        />
        <input
          readOnly
          value={temp}
          className="calculator-output-temp"
          type="text"
        />
      </div>
      <div className="calculator-input">
        <button className="clear" onClick={clear}>
          AC
        </button>
        <button name="quadrate" onClick={handleClick}>
          √
        </button>
        <button name="percent" onClick={handleClick}>
          %
        </button>
        <button className="with-bg" name="+" onClick={handleClick}>
          +
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button className="with-bg" name="*" onClick={handleClick}>
          *
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button className="with-bg" name="-" onClick={handleClick}>
          -
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="with-bg" name="/" onClick={handleClick}>
          /
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button className="with-bg equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
