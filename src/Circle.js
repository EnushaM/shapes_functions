import React from 'react';
class Circle extends React.Component {
    render(props) {
        var r=7;
        var perimeter=2*3.14*r;
        return  (<h2>Perimeter of Square:{this.perimeter}</h2>);
    }
}
export default Circle