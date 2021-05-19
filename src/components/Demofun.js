import React from 'react'

function Demofun(props) {
    
    return (
        <React.Fragment>
            <h1>welcome from child {props.surname} surname: {props.name}</h1>
        </React.Fragment>
        
    )
}

export default Demofun
