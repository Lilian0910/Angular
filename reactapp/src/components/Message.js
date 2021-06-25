import React, {Component} from 'react'

class Message extends Component{
    constructor(props){
        super(props)
        this.state ={
            message:"Welcome to the state"
        }
    }
    changeMessage(){
        this.setState({
            message:"New message from state"
        })
    }

    render(){
        return(
            <div>
               <h2>{this.state.message}</h2> 
               {/* both buttons are the same */}
               <button onClick={()=>{this.changeMessage()}}>CLICK</button>
               <button onClick={()=>{this.changeMessage()}}>CLICK</button>
            </div>
        )
    }
}

export default Message

//bind, call, apply--redirect the this pointer