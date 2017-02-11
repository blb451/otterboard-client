import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Adder extends Component {
  constructor(props) {
    super(props);
    const value = this.props.value ? this.props.value : 0;
    this.state = {
      count: value,
      prev: 0,
    };
  }

  changeValue(type) {
    return () => {
      const newCount = type === '-' ? this.state.count - 1 : this.state.count + 1;
      this.setState({
        prev: this.state.count,
        count: newCount,
      });
    };
  }

  render() {
    const { count } = this.state;
    const { price } = this.props;
    return (
      <div className="adderStyle">
        <button className="buttonStyle" onClick={this.changeValue('-')}>
          <FontAwesome name="minus" size="2x" style={{ color: '#e91' }} />
        </button>
        <div className="valueStyle">
          <p className="countStyle">{`$${count} x ${price}`}</p>
          <p className="totalStyle">{`$${(count * price).toFixed(2)}`}</p>
        </div>
        <button className="buttonStyle" onClick={this.changeValue('+')}>
          <FontAwesome name="plus" size="2x" style={{ color: '#e91' }} />
        </button>
      </div>
    );
  }
}

export default Adder;