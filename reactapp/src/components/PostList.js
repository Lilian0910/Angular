import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{console.log(response)})
            .catch()
    }

    render() {
        return (
            <div>
                Post List
            </div>
        )
    }
}

export default PostList
