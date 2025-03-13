import "./App.css";
import { useState } from "react";

const natoPhoneticAlphabet = {
  A: "Alpha",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliet",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "X-ray",
  Y: "Yankee",
  Z: "Zulu",
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  "!": "Exclamation mark",
  '"': "Double quote",
  "#": "Hash",
  $: "Dollar sign",
  "%": "Percent sign",
  "&": "Ampersand",
  "'": "Apostrophe",
  "(": "Left parenthesis",
  ")": "Right parenthesis",
  "*": "Asterisk",
  "+": "Plus sign",
  ",": "Comma",
  "-": "Hyphen",
  ".": "Period",
  "/": "Slash",
  ":": "Colon",
  ";": "Semicolon",
  "<": "Less than",
  "=": "Equals sign",
  ">": "Greater than",
  "?": "Question mark",
  "@": "At symbol",
  "[": "Left square bracket",
  "\\": "Backslash",
  "]": "Right square bracket",
  "^": "Caret",
  _: "Underscore",
  "`": "Grave accent",
  "{": "Left curly brace",
  "|": "Vertical bar",
  "}": "Right curly brace",
  "~": "Tilde",
};

function App() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    setUserInput(value);
  };

  const convertToPhonetic = (text) => {
    return text.split(``).map((char, index) => {
      const phonetic = natoPhoneticAlphabet[char] || char;
      const cssColorClass = index % 2 === 0 ? "blue" : "red";

      return (
        <span key={index} className={cssColorClass}>
          {/* {phonetic + ``} */}
          {phonetic}
          <span>&nbsp;</span>
        </span>
      );
    });
  };

  return (
    <div className="container">
      <h1 className="title">nato phonetic alphabet</h1>
      <p className="p-text">
        convert text to{" "}
        <a
          href="https://www.walkie-talkie-radio.co.uk/information/radio-standard-nato-phonetic-alphabet#:~:text=The%20standard%20%22NATO%22%20phonetic%20alphabet,%2Dray%2C%20Yankee%2C%20Zulu."
          target="_blank"
        >
          nato phonetic alphabet
        </a>
      </p>
      <input
        className="input-text"
        type="text"
        placeholder="Type Your Text Here..."
        onChange={handleInputChange}
      />

      <p className="output-phonetic">
        {userInput && convertToPhonetic(userInput)}
      </p>
      <p className="copyright">
        <a href="https://www.linkedin.com/in/francis-muraya/" target="_blank">
          &copy; FrancisMurayaDev
        </a>{" "}
        2025
      </p>
    </div>
  );
}

export default App;
