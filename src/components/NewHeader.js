import React from "react";

class NewHeader extends React.Component {
  state = { firstName: "", lastName: "" };
  componentDidMount() {
    this.titleCaseNames();
  }
  titleCaseNames() {
    let first = this.props.username.first.split("");
    let last = this.props.username.last.split("");

    let firstUpper = first[0].toUpperCase();
    let lastUpper = last[0].toUpperCase();

    first.shift();
    first.unshift(firstUpper);
    last.shift();
    last.unshift(lastUpper);

    let newFirst = first.join("");
    let newLast = last.join("");

    this.setState({ firstName: newFirst, lastName: newLast });
  }

  render() {
    return (
      <div className="center aligned header">{`${this.state.firstName} ${
        this.state.lastName
      }`}</div>
    );
  }
}

export default NewHeader;
