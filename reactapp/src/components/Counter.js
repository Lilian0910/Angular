import React, { Component } from 'react'
export class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {count:0}
    }
    increment(){
        this.setState(prevState=>({
            count: prevState.count+1
        }, ()=> console.log('callback: '+this.state.count)))
        //this execute before setState
        
    }

    render(){
        return(
            <div>
                Count -- {this.state.count} <hr/>
                {/* without binding :use => function */}
                <button onClick={()=>this .increment()}>Increment</button>
            </div>
        )
    }
} 


export default Counter