import React from "react";
import Emojipedia from "../emojipedia.js";
import Entry from "./Entry";

function createEntry(entryTerm) {
  return (
    <Entry
      key={entryTerm.id}
      emoji={entryTerm.emoji}
      name={entryTerm.name}
      meaning={entryTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
