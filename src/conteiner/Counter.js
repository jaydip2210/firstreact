import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
             count: 0
        }
    }

    handleInc = () => {
        // console.log("11");

        this.setState({
            count: this.state.count + 1
        })
    }
    
    handleDec = () => {
        // console.log("22");

        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleInc}>+</button>
               {this.state.count}
               <button onClick={this.handleDec}>-</button>
            </div>
        );
    }
}

export default Counter;