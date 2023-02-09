import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel"
import PostStatusFiltre from "../post-status-filtre";
import PostList from '../post-list'
import PostAddForm from "../post-add-form";
import './app.css';
import '../app-header/app-header.css'
import '../post-add-form/post-add-form.css'
import '../post-list/post-list.css'
import '../post-list-item/post-list-item.css'
import '../post-status-filtre/post-status-filter.css'
import '../search-panel/search-panel.css'

import styled  from "styled-components";

const AppBlock = styled.div`
        margin: 0 auto;
        max-width: 800px;
`
const StyleAppBlock = styled(AppBlock)`
        background-color: pink;
`


export default class App extends Component {
constructor(props){
    super(props);
    this.state={
         data : [
            {label: 'Изучить React',          important: true,  like: false, id: 1},
            {label: 'Все ли хорошо?',         important: false, like: false, id: 2},
            {label: 'Меня себя каждый день!', important: false, like: false, id: 3}
        ],
        term: '',
        filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLike = this.onToggleLike.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)

    this.maxId = 4
}

deleteItem (id){
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id)

        const newArr = [...data.slice(0,index),...data.slice(index + 1)]

        return {
            data: newArr
        }
    });
}
addItem(body){
    const newItem = {
        label: body,
        important: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data,newItem];
        return {
            data : newArr
        }
    })
}


onToggleImportant(id){
    this.setState(({data})=>{
        const index = data.findIndex(elem => elem.id === id);

        const old = data[index];
        const newItem = {...old, important : !old.important}
        const newArr = [...data.slice(0,index),newItem, ...data.slice(index + 1)]

        return {
            data: newArr
        }
}) 
}
onToggleLike(id){
    this.setState(({data})=>{
        const index = data.findIndex(elem => elem.id === id);

        const old = data[index];
        const newItem = {...old, like : !old.like}
        const newArr = [...data.slice(0,index),newItem, ...data.slice(index + 1)]

        return {
            data: newArr
        }
})

}


searcPost(items, term) {
    if (term.length === 0){
    return items}

    return items.filter ((item) =>{
        return item.label.indexOf(term) > -1
    });
}

onUpdateSearch (term){
    this.setState({term})
}

filterPost (items,filter){
    if(filter === 'like'){
        return items.filter(item => item.like)
    }else {
        return items
    }
}
onFilterSelect(filter) {
    this.setState({filter})
}
render (){
    const {data, term, filter } = this.state;
    const liked = data.filter(item => item.like).length;
    const allPost = data.length;
    const visiblePosts = this.filterPost(this.searcPost ( data , term), filter);

    return (
            <StyleAppBlock>
                <AppHeader
                liked={liked}
                allPost={allPost}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFiltre
                    filter={filter}
                    onFilterSelect = {this.onFilterSelect}/>
                </div>
                <PostList   
                        posts={visiblePosts}
                        OnDelete={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleLike={this.onToggleLike}
                        />
                <PostAddForm
                onAdd={this.addItem}/>
            </StyleAppBlock>
            )   
}
}