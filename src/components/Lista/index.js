import React from 'react';
import * as S from './styles';

//import typeIcons from '../../utils/typeIcons';  

function Lista({tipo, titulo }) {
 
  return  (
    <S.Container>
        <S.TopCard>
         
          <h3>{titulo}</h3>
        </S.TopCard>
    </S.Container>
  )
}

export default Lista;
