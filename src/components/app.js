import React, { Component } from 'react';
import Adder from '../components/common/adder/';

class App extends Component {
  render() {
    return (
      <div>
        <Adder price={5} />
      </div>
    );
  }
}

export default App;
