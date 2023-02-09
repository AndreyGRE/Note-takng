import React, { Component } from "react";
import { Button } from "reactstrap";
export default class PostStatusFiltre extends Component{
    constructor(props){
        super(props)
        this.button = [
            {name: 'all', label: 'все'},
            {name: 'like', label: 'понравиламсь'}
        ]
    }
    render (){
        const button = this.button.map(({name, label})=>{
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                key ={name} type = "button " 
                className={`btn ${clazz}`}
                onClick={()=> this.props.onFilterSelect(name)}
                >

                    {label}
                </button>
            )
        });
    
    
    return(
        <div className="btn-group">
            {button}
        </div>
    )
}
}

