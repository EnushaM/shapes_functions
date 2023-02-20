import React from 'react';

class Rectangle extends React.Component {
    render(props) {
    var b=props.b;
    var l=props.l;
    var perimeter=2*(l+b);
    return{
        perimeter
    };
}
}
export default Rectangle