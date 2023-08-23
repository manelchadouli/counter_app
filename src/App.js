import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';
import NavBar from './components/navbar';

class App extends Component {
  state = { 
    counters : [
        {id : 1, value:4},
        {id : 2, value:0},
        {id : 3, value:3},
        {id : 4, value:0}
    ]
  } 
  constructor(){
    //initialse the properties of state of the instance
    //set the states directly based on the props we get from the outside (pass the props as a parameters in the constructor and suepr and console log it as this.props)
    super();
    console.log('ApC-Constructor')
    //this.state = this.props.something

  }
  componentDidMount(){
    //called after the component is rendered into the Dom
    //Ajax calls to get data from the server 
    console.log('App - Mounted')
  }
  handleIncrement = counter =>{
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({ counters })
    // this.setState({value : this.state.value +1 }  )
  }
  handleReset= () =>{
    const counters = this.state.counters.map(c =>{
     c.value=0;
     return c 

    });
    this.setState({ counters });
  }
  handleDelete = (counterId) => {
    const counters=this.state.counters.filter(c =>c.id  !== counterId)
    // console.log('handle event called ',counterId)
    this.setState({counters})
  }; 
  render() { 
    console.log('App - rendered')
    return (
      <React.Fragment>
        <NavBar 
        totalCounters={this.state.counters.filter(c => c.value >0).length}/>
        <main className="container">
          <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;



