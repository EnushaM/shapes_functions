import React from 'react';

class Rectangle extends React.Component {
    render() {
    var l=10,b=8;
    var perimeter=2*(l+b);
    return <h3>Perimeter of Rectangle({l},{b}):{perimeter}</h3>;
}
}
export default Rectangle