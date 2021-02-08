import { Component } from "react";
import React from 'react';

class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            background : "",
        });
    }

    change = (nextBackground) =>{
        this.setState({
            background : nextBackground.background,
        });
    }
    render (){
        return (
            <div className="fix-box" style={{background : this.state.background}} onClick={()=>{this.props.applyColor(this.change)}}>
                <h2 className="subheading">Selection</h2>
            </div>
        )
        }
}

export default Selection;
