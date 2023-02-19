import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  updated = 0;
  render() {
    const { value, onIncrement, onDecrement, onUpdate } = this.props;
    this.updated++;
    return (
      <div style={{ border: "1px", borderStyle: "solid", margin: "5px" }}>
        <p>Component: Counter</p>
        <p>
          Content is only rendered to + and -, it is not re-rendered if props
          not changed{" "}
        </p>
        Clicked: {value} times, Rendered: {this.updated} times{" "}
        <button onClick={onIncrement}>+</button>{" "}
        <button onClick={onDecrement}>-</button>{" "}
        <button onClick={onUpdate}>Update counter to same value</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counter.counter
});

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
    onUpdate: () => dispatch({ type: "UPDATE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
