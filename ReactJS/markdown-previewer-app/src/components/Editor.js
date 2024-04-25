import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Editor.css";

function Editor() {
  const dispatch = useDispatch();
  const markdownContent = useSelector((state) => state.markdownContent);

  const handleChange = (e) => {
    dispatch({ type: "UPDATE_MARKDOWN", payload: e.target.value });
  };

  return (
    <div>
      <textarea
        value={markdownContent}
        onChange={handleChange}
        placeholder="Markdown metnini buraya girin..."
      />
      <button onClick={() => dispatch({ type: "SHOW_SAMPLE" })}>
        Örnek Göster
      </button>
    </div>
  );
}

export default Editor;
