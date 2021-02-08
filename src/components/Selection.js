import React, {useState} from 'react'
const Selection = (props) =>{
    const[background, setBackground] = useState({background : ""});
    const {applyColor} = props;
    const change = (nextBackground) => {
        setBackground({background : nextBackground.background})
    }
    return(
        <div className="fit-Box" style={{background : background.background}} onClick={()=>{applyColor(change)}} >
            <h2 className="subheading">Selection</h2>
        </div>
    )
}
export default Selection;
