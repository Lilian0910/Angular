import React, { Component } from 'react'

class Refdemo extends Component {
    constructor(props) {
        super(props)
        //create reference -->use this.inputRef connect to input
        this.inputRef = React.createRef()
    }
    //lifecycle hook, executed when the component is rendered
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }

    //arrow function coz no binding-->display the input in the error textbox
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }
}

export default Refdemo
