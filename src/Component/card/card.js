import { Link } from "react-router-dom";
import React from "react";

const Card = (handClick) => {
    return(
        <div className="list2">
                    <table>
                        <thead>
                            <tr>
                                <th>Post</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {post.map((item) => {
                            return(
                                <tbody>
                                    <tr key={item.id}>
                                        <td >{item.title}</td>
                                        <td><button  onClick={() => handClick(item)}><Link to="post"> View </Link></button></td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
        </div>
    );
}
export default Post;