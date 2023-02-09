import React from "react";
import PostListItem from '../post-list-item'
import { ListGroup } from "reactstrap";
import './post-list'
const PostList = ({posts, OnDelete,onToggleImportant,onToggleLike})=>{

    const elements = posts.map((item) =>{
        
        return (
            <li key={item.id} className="list-group-item">
                 <PostListItem 
                                label={item.label} 
                                important={item.important} 
                                OnDelete={() => OnDelete(item.id)}
                                onToggleImportant={() => onToggleImportant(item.id)}
                                onToggleLike={() => onToggleLike(item.id)}
                                />
            </li>
            
        )
    })

    return (
        <ListGroup className="app-list ">
            {elements}
            
        </ListGroup>  
    )
}
export default PostList;  