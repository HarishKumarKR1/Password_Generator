import "./styles.css";
import Generate from "./generate.jsx";
import { useState } from "react";

export default function App() {
  const [number, setnumber] = useState(10);
  const [type, setType] = useState("Easy");

  function changeNum(event) {
    setnumber(event.target.value);
  }

  function ChangeType(event) {
    setType(event.target.value);
  }
  return (
    <div className="App">
      <header className="heading">Password Generator</header>
      <p className="Length">
        Select Length:
        <input
          className="number"
          type="number"
          min="6"
          max="20"
          onChange={changeNum}
          value={number}
        />
      </p>

      <p className="Type">
        Select Complexity:
        <select
          className="complexity"
          id="complexity"
          placeholder="complexity"
          onChange={ChangeType}
          value={type}
        >
          <option> Easy </option>
          <option> Medium </option>
          <option> Hard </option>
        </select>
      </p>
      <Generate Length={number} Complexity={type} />
    </div>
  );
}
