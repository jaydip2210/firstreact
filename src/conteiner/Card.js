import React from 'react';
import { Heading, Heading1, Heading2, Ptag } from './Card.Style';

function Card({data}) {
    return (
        <div>
            {
                <div className='row'> 
                    {
                        data.map((v) => {
                            return (
                                <div className='col-md-4'>
                                    <Heading>{v.name}</Heading>
                                    <Ptag>{v.features}</Ptag>
                                    <Heading1>{v.price}</Heading1>
                                    <Heading2>{v.category}</Heading2>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Card;