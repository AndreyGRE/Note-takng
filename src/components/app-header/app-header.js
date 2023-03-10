import React from "react";
import './app-header'

import styled  from "styled-components";
const Header = styled.div`
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          h1 {
            font-size: 26px;
            color: ${props => props.colored ? 'red' : 'black'};
            : hover {
              color: green;
            }
          h2{
            font-size: 1.2rem;
            color: grey;
          }
          }

`

const AppHeader = ({liked,allPost})=>{
    return (
      <Header colored >
            <h1>Имя Фамилия</h1>
            <h2>{allPost} записей , из них понравилось {liked}</h2>
      </Header>  
    )
}
export default AppHeader