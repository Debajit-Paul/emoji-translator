import React, { useState } from "react";
import "./styles.css";

const username = "Emoji Translator";
const txtcolor = "purple";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😶‍🌫️": "Face in Clouds",
  "😏": "Smirking Face"
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
