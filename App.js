import React, {Component} from 'react';
import { AppStack } from './src/Router';
class App extends Component {
  render() {
    const Nav = AppStack();
    return (
      <Nav/>
    );
  }
}

export default App;