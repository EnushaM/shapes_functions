import React from 'react';

class Hexagon extends React.Component {
    render(props) {
    var s=props.s;
    var perimeter=6*s;
    return{
        perimeter
    };
}
}
export default Hexagon