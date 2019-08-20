import React, { Component } from 'react';

export function desactivable(WrappedComponent) {
  class Desactivable extends Component {
    state = {
      show: true,
    };
    handleClick = () => {
      this.setState({
        show: !this.state.show,
      });
    }

    render() {
      const {show, ...innerProps} = this.props;
      return (
        <div>
          <button onClick={this.handleClick}>{this.state.show ? 'Off' : 'On'}</button>
          {this.state.show && <WrappedComponent {...innerProps} />}
        </div>
      );
    }
  }

  Desactivable.displayName = `Desactivable(${WrappedComponent.displayName || WrappedComponent.name})`;

  return Desactivable;
}
// this
// button.addEventListener('click', () => { this.innerText++; })
