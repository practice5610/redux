import React, { Component } from "react";
import { connect } from "react-redux";

class Other extends Component {
  updated = 0;
  render() {
    const { other } = this.props;
    this.updated++;
    return (
      <div style={{ border: "1px", borderStyle: "solid", margin: "5px" }}>
        <p>Component: Other</p>
        <p>Content is not updated on Redux state change</p>
        Rendered: {this.updated} times, Other is always: {other}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  other: state.other
});

export default connect(mapStateToProps)(Other);
