import React from "react";

class NewBody extends React.Component {
  state = { street: "", city: "", state: "" };

  componentDidMount() {
    this.titleCase();
  }

  titleCase() {
    let street = this.props.location.street.toUpperCase();
    let city = this.props.location.city.toUpperCase();
    let state = this.props.location.state.toUpperCase();
    this.setState({
      street,
      city,
      state
    });
  }

  render() {
    return (
      <div
        className="center aligned description"
        style={{ whiteSpace: "pre-line" }}
      >
        {`${this.state.street}
        ${this.state.city}, ${this.state.state}
        ${this.props.location.postcode}`}
      </div>
    );
  }
}

export default NewBody;
