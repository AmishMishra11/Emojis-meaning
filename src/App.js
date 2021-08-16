import React, { useState } from "react";
import "./styles.css";

var emojis = {
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "😀": "Grinning Face",
  "🔥": "Fire",
  "🥺": "Pleading Face"
};

var emojiWeKnow = Object.keys(emojis);
var heading = "Emoji Interpreter ";

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiListner(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];

    if (meaning === undefined) {
      meaning = "sorry we dont have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClick(emoji) {
    var meaning = emojis[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App container">
      <h1>{heading}</h1>
      <div style={{ fontWeight: "bold", padding: "1rem" }}>
        Understand the emoji's meaning
      </div>
      <div style={{ padding: "1rem" }}>enter a emoji</div>
      <input onChange={emojiListner} />

      <h2>{meaning}</h2>
      <h3>emojies we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClick(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
