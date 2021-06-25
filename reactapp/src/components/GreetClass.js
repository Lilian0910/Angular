import React, {Component} from 'react'

export default class GreetClass extends Component{
    render(){
        return(
            <div>
                <h1>great {this.props.name} aksk {this.props.heroName}</h1>
            </div>
        )
    }
}

//hooks--used to state