import React, { Component } from "react";
import './post-add-form'

export default class PostAddForm extends Component {
    constructor (props){
    super(props);
      this.state = {
          text:''
      }
     this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
}

onValueChange(e){
     this.setState({
         text : e.target.value
  })
  
}
 onSubmit(event){
    
    this.props.onAdd(this.state.text)
    this.setState ({
        text: ''
    })
    event.preventDefalt() ; 
    // отменить стандартное поведение браузера
}
    render(){
        return (
            <form   
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                        type="text"
                        placeholder="о чем вы думаетет"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary" >
                        Добавить
                </button>
            </form>
        )
    }
  
}

