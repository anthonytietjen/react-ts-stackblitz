import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import moment from 'moment';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Branch 2 
          Start editing to see some magic happen :)
          Hello {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
