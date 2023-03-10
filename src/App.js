import React, { useState } from "react";
import "./styles.css";

const username = "Emoji Translator";
const txtcolor = "purple";

var emojiDictionary = {
  "π": "Grinning Face",
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Sweat",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Face with Tears of Joy",
  "π": "Slightly Smiling Face",
  "π": "Upside-Down Face",
  "π": "Winking Face",
  "π": "Smiling Face with Smiling Eyes",
  "π": "Smiling Face with Halo",
  "π₯°": "Smiling Face with Hearts",
  "π": "Smiling Face with Heart-Eyes",
  "π€©": "Star-Struck",
  "π": "Face Blowing a Kiss",
  "π": "Kissing Face",
  "π": "Kissing Face with Closed Eyes",
  "π": "Kissing Face with Smiling Eyes",
  "π": "Face Savoring Food",
  "π": "Face with Tongue",
  "π": "Winking Face with Tongue",
  "π€ͺ": "Zany Face",
  "π": "Squinting Face with Tongue",
  "π€": "Money-Mouth Face",
  "π€": "Smiling Face with Open Hands",
  "π€­": "Face with Hand Over Mouth",
  "π€«": "Shushing Face",
  "π€": "Thinking Face",
  "π€": "Zipper-Mouth Face",
  "π€¨": "Face with Raised Eyebrow",
  "π": "Neutral Face",
  "π": "Expressionless Face",
  "πΆ": "Face Without Mouth",
  "πΆβπ«οΈ": "Face in Clouds",
  "π": "Smirking Face"
};

const emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiChange, setemojiChange] = useState("");

  function texthandelar(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setemojiChange(meaning);
  }

  function itemClickHandeler(emoji) {
    let meaning = emojiDictionary[emoji];
    setemojiChange(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: txtcolor }}>{username}</h1>
      <div className="output">
        <input
          placeholder="Put your emoji here..."
          style={{ marginTop: "5rem", fontSize: "large" }}
          onChange={texthandelar}
        />
        <h3>{emojiChange}</h3>
      </div>

      <div className="emojiContener">
        <h3>Emoji we know</h3>
        <div>
          {emojiWeKnow.map((emoji) => (
            <span
              key={emoji}
              onClick={() => itemClickHandeler(emoji)}
              style={{
                fontSize: "1.5rem",
                padding: "0",
                margin: "1rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
