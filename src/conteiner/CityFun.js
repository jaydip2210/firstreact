import React from 'react';

function CityFun(props) {
    return (
        <div>
            <h1>City Functional Based Component</h1>
            <h2>Country: {props.Country_Name}</h2>
            <h3>City: {props.Country_Name === "India" ? "surat" : "London"}</h3>
        </div>
    );
}

export default CityFun;