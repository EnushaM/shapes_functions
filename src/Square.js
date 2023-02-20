import React from 'react';

class Square extends React.Component {
    render(props) {
    var s=props.s;
    var perimeter=4*s;
    return{
        perimeter
    };
}
}
export default Square