import React from 'react';
import * as S from './styles';
import typeIcons from '../../utils/typeIcons';  

function Lista({tipo, titulo }) {
 
  return  (
    <S.Container>
        <S.TopCard>
          <img src={typeIcons[tipo]} alt="Icone do lixo"/>
          <h3>{titulo}</h3>
        </S.TopCard>
    </S.Container>
  )
}

export default Lista;
