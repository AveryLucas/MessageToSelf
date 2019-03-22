import React, { Component } from "react";

class MessageList extends Component {
  render() {
    return (
      <div className="messageList">
        <div className="messageHeader">
          <h4>{this.props.header}</h4>
          <p>
            Showing {this.props.messages.length} of {this.props.messages.length}
          </p>
        </div>
        <ul>
          {this.props.messages
            .filter(item => item.received == true)
            .map(item => (
              <li key={item.id}>
                <div className="messageBlock">
                  <p>{item.title}</p>
                  <span>sent to self 2 weeks ago</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;
