import React, { Component } from "react";

export default class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    
  componentWillMount() {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data=>this.setState({posts:data}))
    console.log(9);
  }

  render() {
      const postItem = this.state.posts.map(post=>(
           <div key={post.id}>
               <h3>{post.title}</h3>
               <p>{post.body}</p>
           </div>
      ))
    return (
      <div>
        {postItem}
      </div>
    );
  }
}
