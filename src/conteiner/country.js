import React, { Component } from 'react';
import City1 from './City1';

class Country extends Component {
    //It initialize componenet
    constructor(props) {
        super(props);
        
        //state: It is an object that store data or information of component
        this.state = {
            CountryName: 'India'
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

                <City1 Country_Name={this.state.CountryName} />
            </div>
        );
    }
}

export default Country;

