import React, { Component } from "react";

class TodoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "1 hour of japanese duolingo",
          checked: true
        }
      ],
      input: ""
    };
  }

  randomKEY = () => {
    return Math.random() * 10;
  };

  addToTodoList(text) {
    let temp = this.state.list;
    temp.push({
      title: text,
      checked: false
    });
    this.setState({ list: temp });
  }

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.addToTodoList(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <div className="todoBlock">
        <h4>{this.props.title}</h4>
        <ul>
          {this.state.list.map(item => (
            <li key={this.randomKEY()}>
              {/* <div className="delete-button" /> */}
              <input type="checkbox" />
              <span>{item.title}</span>
            </li>
          ))}
          <li>
            {/* <input type="checkbox" /> */}
            <input
              type="text"
              onKeyPress={this._handleKeyPress}
              placeholder="Type here to add something"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoBlock;
