import React from "react";
class Triangle extends React.Component {
    render() {
    var b=9;
    var h=4;
    var perimeter=0.5* b*h;
    return <h3>Perimeter of Triangle({b},{h}):{perimeter}</h3>;
}
}
export default Triangle