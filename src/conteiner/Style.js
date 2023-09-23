import React from 'react';
import { DivBox, Heading, Heading1, Heading2, MainDiv, Ptag } from './Self.Style';

function style({...rest}) {
    return (
        <div>
            <MainDiv {...rest}/>
        </div>
    );
}

export default style;