// EmojiResultRow.jsx
import React from "react";

const EmojiResultRow = ({ symbol, title }) => {
  return (
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
      data-testid="emoji-row"
    >
      <img
        alt={title}
        src={`//cdn.jsdelivr.net/emojione/assets/png/${symbol}.png`}
      />
      <span className="title">{title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
};

export default EmojiResultRow;
