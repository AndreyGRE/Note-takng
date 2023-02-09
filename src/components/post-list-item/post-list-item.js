import React, {Component} from "react";
import './post-list-item'

export default class PostListItem extends Component {

    
    render ()
    {
        const {label, OnDelete,onToggleImportant,onToggleLike,important,like } = this.props;
        
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }

        return (
                    <li className={classNames}>
                        <span className="app-list-item-label" onClick={onToggleLike}>
                                {label}
                        </span>
                        <div type = "button" className="d-flex justify-content-center align">
                            <button type = "button" className="btn-star btn-sm" onClick={onToggleImportant}>
                                <i className="fa fa-star"></i>
                            </button>
                            <button 
                            type = "button"  
                            className="btn-trash btn-sm"
                            onClick={OnDelete}
                            >
                                <i className="fa fa-trash-o"></i>
                            </button>
                            <i className="fa fa-heart"></i>
                        </div>
                    </li>
                )
    }
}
