import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./post.css";

const Post = () => {
    const [data,setData] = useState({
        title:"",
        body:""
    });
    const {id} = useParams();
    useEffect(() => {
        loaduser();
    },[]);
    const loaduser = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setData(res.data)
    };

    const [editOption, setEditOption] = useState(false);
 
    
    return(
        <>
        <div className="detail">
            <h2>Tittle :</h2>
            <p>{data.title}</p>
            <h2>Body :</h2>
            <p>{data.body}</p>
        </div>
            
        </>
    )
}
export default Post;