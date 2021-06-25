import React, { Component } from 'react'
export class EventBind extends Component{
    constructor(props){
        super(props)
        this.state = {message:"Hello"}
        this.clickHandler= this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({message:"Bye"})
    }
    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }
} 


export default EventBind