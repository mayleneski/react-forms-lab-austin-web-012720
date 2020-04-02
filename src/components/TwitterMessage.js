import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    let characters = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleMessageChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <h4>{characters} Characters Left in Your Message</h4>
      </div>
    );
  }
}

export default TwitterMessage;
