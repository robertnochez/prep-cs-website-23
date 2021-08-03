import React from 'react';
import './../App.css';

import Highlight from 'react-highlight';
import {CopyBlock, dracula} from "react-code-blocks";
 
function CodeBlock(props) {
  return (
    <div className="codeblock">
    <Highlight className="python">
      {props.code}
    </Highlight>
    </div>

    // <CopyBlock
    //   text={props.code}
    //   theme={dracula}
    //   language={"python"}
    //   showLineNumbers={props.showLineNumbers}
    //   startingLineNumber={props.startingLineNumber}
    //   wrapLines
    // />
  );
}
 
export default CodeBlock;