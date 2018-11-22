import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import IceCreamForm from './components/IceCreamForm';
import IcecreamView from './components/IcecreamView';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        < IcecreamView />
        < IceCreamForm />
      </div>
    );
  }
}
export default App;
