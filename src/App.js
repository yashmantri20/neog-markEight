import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [emoji, setEmoji] = useState("");
  const emojis = {
    "😀": "Grinning Face",
    "✌🏻": "victory",
    "🖥": "computer",
    "🤓": "Nerd Face",
    "🧐": "Face with Monocle",
    "😕": "Confused Face",
    "😟": "Worried Face",
    "🙉": "hear no evil monkey",
    "🎓": "Graduation",
    "🌱": "Earth Day"
  };

  const searchEmoji = (e) => {
    var meaning = emojis[e.target.value];
    if (meaning) setEmoji(meaning);
    else setEmoji("Please enter different emoji");
  };

  return (
    <div className="App">
      <h1>Know Your Emotions</h1>
      <input
        type="text"
        onChange={searchEmoji}
        placeholder="Please type an emoji"
      />
      <h2>{emoji}</h2>
    </div>
  );
}
