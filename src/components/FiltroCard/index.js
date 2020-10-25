import React from 'react';
import * as S from './styles';


function FiltroCard({title, actived}) {
  return  (
    <S.Container actived={actived}>
  <span>ATUALIZAR</span>
    </S.Container>
  )
}

export default FiltroCard;
