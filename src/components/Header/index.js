import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INICIO</a>
        <a href="#">ADICIONAR</a>
      
      </S.RightSide>
    </S.Container>
  )
}

export default Header;

