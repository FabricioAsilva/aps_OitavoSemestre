import React from 'react';
import * as S from './styles';
import {Link}from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
      <Link to="/" >HOME</Link>
        <Link to="/aps" >ADICIONAR</Link>
       
      
      </S.RightSide>
    </S.Container>
  )
}

export default Header;

