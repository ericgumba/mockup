import React, { Component } from 'react'; 
import './App.css';
import Table  from './Components/Table';
import InputFields from './Components/InputFields'; 
import EnhancedTable from './Components/EnhancedTable';
class App extends Component {
  constructor(){
    super();
    this.state = {
      displayTable: false
    };
  }

  setDisplayTable = () => {
    this.setState({displayTable: true});
  }

  render() {
    return (
      <div className="App"> 
        <InputFields setDisplayTable={this.setDisplayTable} /> 

        {this.state.displayTable ? <EnhancedTable/> : null} 
      </div>
    );
  }
}

export default App;
