import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";
import Dante from "Dante2";

const keyCommands = {
  "alt-shift": [{ key: 65, cmd: "add-new-block" }],
  "alt-cmd": [
    { key: 49, cmd: "toggle_block:header-one" },
    { key: 50, cmd: "toggle_block:header-two" },
    { key: 51, cmd: "toggle_block:header-three" }
  ],
  cmd: [
    { key: 66, cmd: "toggle_inline:BOLD" },
    { key: 73, cmd: "toggle_inline:ITALIC" },
    { key: 75, cmd: "insert:link" }
  ]
};

class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
  }
  render() {
    return (
      <div id="editor-container">
        {/* <Dante /> */}
        {/* <Editor editorState={this.state.editorState} onChange={this.onChange} /> */}
        <Dante content={null} tooltips={[]} key_commands={keyCommands} />
      </div>
    );
  }
}

export default Paper;
