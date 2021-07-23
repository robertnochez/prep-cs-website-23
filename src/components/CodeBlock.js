import React from "react";
import "./../App.css";

import { CopyBlock, dracula, CodeBlock, nord } from "react-code-blocks";

import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  docco,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock1(props) {
  return (
    <div style={{ fontFamily: "Menlo", width: 800 }}>
      <CopyBlock
        text={props.code}
        language={"python"}
        showLineNumbers={true}
        // startingLineNumber={props.startingLineNumber}
        theme={props.theme ? props.theme : dracula}
        // highlight={props.highlight}
        // codeBlock
      />

      <CodeBlock text={`def foo()`} theme={nord} language="python" />
    </div>
    // <div style={{ width: 800 }}>
    //   <SyntaxHighlighter
    //     language="python"
    //     style={atomOneDark}
    //     // children={"3, 5"}
    //     wrapLines={true}
    //     showLineNumbers={true}
    //     startingLineNumber={props.startingLine}
    //   >
    //     {props.code}
    //   </SyntaxHighlighter>
    // </div>
  );
}

export default CodeBlock1;
