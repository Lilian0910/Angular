import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state={hasError:false}  
    }

    //Lifecycle hook
    static getDerivedStateFromError(error) {
        return{
            hasError: true
        }
    }

    componentDidCatch(error,info){
        console.log(error)

    }

    render() {
            if(this.state.hasError){
            return <p>Something went wrong</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary
