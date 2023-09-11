import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const [CountryName, setCountryName] = useState('India');

    const changecontory = () => {
        setCountryName('Uk')
    }
    return (
        <div>
            <h1>Country Based Component</h1>
            <h2>Country Name: {CountryName}</h2>
            <button onClick={changecontory}>Change contory</button>

            <CityFun Country_Name={CountryName}/>
        </div>
    );
}

export default CountryFun;