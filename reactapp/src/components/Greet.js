import React from 'react'

function Greet(props){
    return(
        <div>
            {/* even looks liek html, its JFX */}
            <h1>greet {props.name} aka {props.heroName}</h1>
            
        </div>
    )
    //return React.createElement('div', null, React.createElement('h1', null,'hello world'))
}


export default Greet