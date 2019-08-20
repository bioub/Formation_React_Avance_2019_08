import React, { Component } from 'react';
import css from './Select.module.css';

export class Select extends Component {
  state = {
    show: false,
  };
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.Container}>
        <div className={css.Title} onClick={this.handleClick}>{title}</div>
        {this.state.show && (
          <div className={css.Items}>
            {children(this.handleClick)}
          </div>
        )}
      </div>
    )
  }
}
