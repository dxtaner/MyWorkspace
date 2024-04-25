import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./Previewer.css";

function Previewer() {
  const markdownContent = useSelector((state) => state.markdownContent);

  return (
    <div>
      <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
    </div>
  );
}

export default Previewer;
