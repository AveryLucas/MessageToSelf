import React, { Component } from "react";
import "./App.css";

import Paper from "./components/Paper";
import SideMenu from "./components/SideMenu";

class App extends Component {
  state = {
    messagesInCommute: [],
    messages: []
  };

  setMessageToArrived = id => {
    let { messagesInCommute } = this.state;
    let index = messagesInCommute.findIndex(msg => msg.id === id);
    messagesInCommute[index].received = true;
    this.setState({ messagesInCommute });
  };

  addMessageInCommute = text => {
    let { messagesInCommute } = this.state;
    // console.log(messagesInCommute);
    let newMessage = {
      received: false,
      read: false,
      title: "This is a title :D",
      text: "DOOP",
      id: Math.floor(Math.random() * 100)
    };
    messagesInCommute.push(newMessage);
    setTimeout(() => this.setMessageToArrived(newMessage.id), 1000);
    this.setState({ messagesInCommute });
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <SideMenu messages={this.state.messagesInCommute} />
          <div id="editor">
            <div>
              <Paper />
              <div id="submit">
                <span>1 week</span>
                <button onMouseDown={this.addMessageInCommute}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
