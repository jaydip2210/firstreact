import React, { Component } from 'react';

class Timer extends Component {
    //1
    constructor(props) {
        super(props);
        
        this.state = {
            Time: new Date()
        }
    }

    tick = () => {
        console.log("tick");

        this.setState({
            Time: new Date()
        })
    }

    //3
    componentDidMount() {
        console.log("comp");
        setInterval(() => this.tick(), 1000);
    }

    //5
    componentDidUpdate(prevProps, prevState) {
        if(this.state.Time !== prevState.Time) {
            console.log("compupd");
        }
    }

    //6
    componentWillUnmount = () => {
        console.log("unmount");
        clearInterval(this.Time)
    }
    
    //2 //4
    render() {
        return (
            <div>
                <h1>Time Class Based</h1>
                <h2>{this.state.Time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Timer;