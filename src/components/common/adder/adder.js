import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../../styles/components/common/adder.scss';

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
      <div className="adder__body">
        <button className="adder__button" onClick={this.changeValue('-')}>
          <FontAwesome name="minus" size="2x" style={{ color: '#e91' }} />
        </button>
        <div className="adder__value">
          <p className="adder__count">{`$${count} x ${price}`}</p>
          <p className="adder__total">{`$${(count * price).toFixed(2)}`}</p>
        </div>
        <button className="adder__button" onClick={this.changeValue('+')}>
          <FontAwesome name="plus" size="2x" style={{ color: '#e91' }} />
        </button>
      </div>
    );
  }
}

export default Adder;
