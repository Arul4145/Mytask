import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dash.css";
import axios from "axios";
function Dashboard( ) {
    const [user,setUser] = useState([]);
    const [comment,setComment] = useState ([]);
    const [todos,setTodos] = useState ([]);
    const [post,setPost] = useState ([]);

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUser(res.data)) 
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(res => setComment(res.data))
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res => setTodos(res.data))
    axios.get(` https://jsonplaceholder.typicode.com/posts`)
    .then(res => setPost(res.data))
})

    return(
       
        <div className="board">
            <div className="main">
                <h3>Dashboard</h3>
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        {user.map((data) => {
                            return(
                                <tbody>
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.website}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>  
                <div className="list2">
                    <table>
                        <thead>
                            <tr>
                                <th>Post</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {post.map((item,index) => {
                            return(
                                <tbody>
                                    <tr key={item.id}>
                                        <td >{item.title}</td>
                                        <td><button ><Link to={`post/${item.id}`}> View </Link></button></td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
            <div className="user">
                <div>
                    <div className="post">
                        <h2>Post</h2>
                        <span>{post.length}</span>
                    </div>
                    <div className="comment">
                        <h2>Comment</h2>
                        <span>{comment.length}</span>
                    </div>
                    <div className="action">
                        <h2>To dos</h2>
                        <span>{todos.length}</span>
                    </div>
                    <div className="like">
                        <h2>User</h2>
                        <span>{user.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
            }
export default Dashboard;