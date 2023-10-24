import React from 'react';
import { Heading, Heading1, MainDiv, Ptag } from './Card.Style';

function Card({ id, img = '', title = '', subtitle }) {
    return (
        <div>
            {
                <MainDiv>
                    <Heading1>{img}</Heading1>
                    <Heading>{title}</Heading>
                    <Ptag>{subtitle}</Ptag>
                </MainDiv>
            }
        </div>
    );
}

export default Card;