import React, { Component } from "react";
import TodoBlock from "./TodoBlock";
import "../todolist.css";
import MessageList from "./MessageList";

class SideMenu extends Component {
  render() {
    return (
      <div id="sidemenu-container">
        <div id="sidemenu-header">
          <h3>Message to self</h3>
          <p>A portal to the future</p>
        </div>
        <TodoBlock title="Daily To-do" />
        <TodoBlock title="Scheduled To-do" />
        <TodoBlock title="To-do before March 1, 2019" />

        <MessageList header={"Unreaded"} messages={this.props.messages} />
      </div>
    );
  }
}

export default SideMenu;
