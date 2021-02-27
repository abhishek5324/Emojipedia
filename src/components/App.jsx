import React from "react";
import emojipedia from "../emojipedia";
import Header from "./Header";
import Card from "./Card";

function currCard(emojis) {
  return (
    <Card
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />

      {emojipedia.map(currCard)}
    </div>
  );
}

export default App;
