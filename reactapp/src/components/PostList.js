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
            .then(response =>{console.log(response)
            this.setState({posts:response.data})
            })
            .catch()
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                Post List
                {
                    posts.length ?
                    posts.map(post=>{<div key={post.id}></div>})
                }
            </div>
        )
    }
}

export default PostList
