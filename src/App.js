import React, {Component} from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      board : Array(9).fill("X")
    }
  }

  render() {
    return (
      <Grid columns={3} centered>
        <Grid.Column centered>
          <div className="App">
          {this.state.board.map((box, index)=> {
            return(
              <div key={index} className="box">{box}</div>
            )
          })}
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
