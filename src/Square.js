import React from 'react';

class Square extends React.Component {
    render() {
    var s=9;
    var perimeter=4*s;
    return <h3>Perimeter of Square({s}):{perimeter}</h3>;

}
}
export default Square