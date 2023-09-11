import React, { Component } from 'react';

// class Props extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>hello </h1>
//             </div>
//         );
//     }
// }

export const Props = (Props) => {
    console.log(Props);
    return (
        <div>
            <h1>hello {Props.name} - {Props.last} </h1>
            {Props.children}
        </div>

    )
}

export default Props;