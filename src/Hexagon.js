import React from 'react';

class Hexagon extends React.Component {
    render() {
    var s=5;
    var perimeter=6*s;
    return <h3>Perimeter of Hexagon({s}):{perimeter}</h3>;
}
}
export default Hexagon