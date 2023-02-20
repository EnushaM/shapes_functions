import React from 'react';
/*
class Circle extends React.Component {
    render() {
        var r=7;
        var perimeter=2*(22/7)*r;
        return <h3>Perimeter of Circle({r}):{perimeter}</h3>;
    }
}
*/
class Circle extends React.Component {
    render(props) {
        var r=5;
        var perimeter=2*(22/7)*r;
        return <h3>Perimeter of Circle({r}):{perimeter}</h3>;
    }
}
export default Circle