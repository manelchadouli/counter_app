import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //   value: this.props.counter.value,
    // //   tags : ["tag1","tag2","tag3"]
    // };
    // styles = {
    //   fontSize: 50,
    //   fontWeight:'bold'
    // }
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //  instead of doing a constructor for each event handler we use arrow function that handles key and can do the biinding of this that refrence to the current obj
    // } 

    componentDidUpdate(prevProps,prevState){
        //if did change do a ajax call to server to get new data
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        // if (prevProps.counter.value != props.counter.value){
        //     //do ajax call to the server to get new data
        // }
        
    }
    componentWillUnmount(){
        console.log('counter-unmounted')
    }
  
    
    render() { 
        // console.log(this.props)
        console.log('Counter- rendered');
        return  (
        <div>
            <h4>{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'>
                Increment
            </button>
            <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm  m-2">
                Delete
            </button>
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
        </div>)
    }
    getBadgeClasses() {
        let claccess = 'badge m-2 badge-';
        claccess += this.props.counter.value === 0 ? 'warning' : 'primary';
        return claccess;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value ;
    }
}
 
export default Counter;