import React, { Component } from 'react';

export function desactivable(WrappedComponent) {
  return class extends Component {
    state = {
      show: true,
    };
    handleClick = (show) => {
      this.setState({
        show: !show,
      });
    }

    render() {
      return (
        <div>
          <button onClick={this.handleClick}>{this.state.show ? 'Off' : 'On'}</button>
          {this.state.show && <WrappedComponent />}
        </div>
      );
    }
  }
}
// this
// button.addEventListener('click', () => { this.innerText++; })
