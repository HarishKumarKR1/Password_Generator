import React, { useState } from "react";

function Generate(props) {
  const [text, setText] = useState("");
  function Random() {
    var result = "";
    var characters = "";
    var Easy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var Medium =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var Hard =
      "!§$%&/()=?{20ac}ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if (props.Complexity === "Easy") {
      characters = Easy;
    } else if (props.Complexity === "Medium") {
      characters = Medium;
    } else {
      characters = Hard;
    }
    for (let i = 0; i < props.Length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setText(result);
  }
  const [state, setState] = useState("Copy");
  function copy() {
    var text = document.getElementById("out").innerHTML;
    navigator.clipboard.writeText(text);
    console.log(text);
    setState("Copied!");
    setTimeout(() => {
      setState("Copy");
    }, 500);
  }
  return (
    <div>
      <p className="output" id="out" placeholder="Click Genarate">
        {text}
      </p>
      <input
        className="generateB"
        type="button"
        onClick={Random}
        value="Generate"
      />
      <input className="copyB" type="button" onClick={copy} value={state} />
    </div>
  );
}

export default Generate;
