// import React, { Component } from 'react'
// import axios from 'axios'
// import PostAxios from './PostAxios';
// export default class axiosTest extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             postData: [],
//         }
//     }

//     componentDidMount() {
//         axios.get("https://jsonplaceholder.typicode.com/posts/")
//             .then(response => this.setState({ postData: response.data }))
//     }

//     // getComment = () => {
//     //     axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
//     //     .then(response => console.log(response))
//     // }

//     render() {
//         const { postData } = this.state
//         return (
//             <div>
//                 {postData.map(post => <PostAxios key={post.id} title={post.title} body={post.body} />)}
//             </div>
//         )
//     }
// }
