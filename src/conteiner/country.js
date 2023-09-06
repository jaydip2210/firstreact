import React, { Component } from 'react';

class Country extends Component {
    //It initialize componenet
    constructor(props) {
        super(props);
        
        //state: It is an object that store data or information of component
        this.state = {
            CountryName: 'india'
        }
    }
    
    changecontory = () => {
        this.setState({
            CountryName: 'Uk'
        })
    }


    render() {
        return (
            <div>
                <h1>Country Component</h1>
                <h2>Our country is: {this.state.CountryName}</h2>
                <button onClick={this.changecontory}>Changecontory</button>
            </div>
        );
    }
}

export default Country;

