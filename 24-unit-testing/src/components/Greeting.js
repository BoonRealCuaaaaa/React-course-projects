import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello Worlds!</h2>
      {!changedText ? <p>It's good to see you</p> : <Output>Changed</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}
