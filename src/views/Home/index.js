import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Lista from '../../components/Lista';
import * as S from './styles';


function Home(){
  const [estado, setEstado] = useState([]);
  async function buscar(){
   await api.get('/aps')
   .then(response => {
      setEstado(response.data)})
  }
  useEffect(() => {
    buscar();
  },[])

  return (
    <S.Container>
      <Header/>
      <S.Title>
        <h2>TIPOS DE LIXO</h2>
      </S.Title>
      <S.Content>
          {
            estado.map(b => (
              <Link to= {`/aps/${b._id}`}>
              <Lista key={b._id} tipo={b.tipo}  titulo={b.titulo}/>
              </Link>
              ))
          }
          
      </S.Content>
    </S.Container>
  )
}
export default Home;
