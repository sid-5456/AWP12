import React from "react";
class DisplayProps extends React.Component{
    render(){
        return(
            <div className="DisplayProps">
                <h1>Class Component to display values</h1>
                <h2>Name:{this.props.Name}</h2>
                <h2>Age:{this.props.Age}</h2>
                <h2>Roll:{this.props.Roll}</h2>
            </div>
        );
    }
}
export default DisplayProps;