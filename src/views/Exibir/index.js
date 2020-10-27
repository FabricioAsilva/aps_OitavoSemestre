import React, { useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
//import api from '../../services/api';
import typeIcons from '../../utils/typeIcons';
import Header from '../../components/Header';
import * as S from './styles';
import api from '../../services/api';

function Exibir({match}){
    const[redirect, setRedirect] = useState(false);
    const [tipo, setTipo] = useState();
    //const [id, setId] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();

    async function Caregar(){
        await api.get(`/${match.params.id}`)
        .then(response => {
           setTipo(response.data.tipo)
           setTitulo(response.data.titulo)
           setDescricao(response.data.descricao)
        })
    }
    async function Salva(){
        //Validação dos dados
        if(!tipo)
            return alert("Escolha um Tipo de lixo")
            else if(!titulo)
                return alert("Informe o Título!")
                else if(!descricao)
                    return alert("Descreva como descarta!")
            if(match.params.id){
                await api.put(`/aps/${match.params.id}`,{
                    tipo,
                    titulo,
                    descricao
                }).then(() =>
                    setRedirect(true)
                )
            }else{
        await api.post('/aps',{
            tipo,
            titulo,
            descricao
        }).then(() =>
            setRedirect(true)
        )
    }
    }
    async function Remove(){
        const res = window.confirm('Confirme a exclusão?')
        if(res === true){
            await api.delete(`/aps/${match.params.id}`)
            .then(() => setRedirect(true));
        }
    }
    useEffect(()=>{
        Caregar();
    })
  return (
    <S.Container>
        {redirect && <Redirect to="/" />}
      <Header/>
        <S.Fomulario>
            <S.typeIcons>
                {
                    typeIcons.map((icon, index) => (
                        index >0 && 
                    <button tipo="button" onClick={() => setTipo(index)} >
                        <img src={icon} alt="Tipo de Lixo" 
                        className= {tipo && tipo !== index && 'inative'} />
                    </button>
                    ))
                }

            </S.typeIcons>
            <S.Input>
                <span>TIPO DE LIXO</span>
                <input type="text" placeholder= "Descrição" 
                onChange={e => setTitulo(e.target.value)} value={titulo} />
            </S.Input>

            <S.TextArea>
                <span></span>
                <textarea rows={10} placeholder="Informações de descarte..."
                 onChange={e => setDescricao(e.target.value)} value={descricao}/>
            </S.TextArea>
            <S.Options>
                {match.params.id && <button type="button" onClick={Remove} >EXCLUIR</button>}
            </S.Options>
            <S.Salva>
                <button type="button" onClick={Salva} >SALVAR</button>
            </S.Salva>
        </S.Fomulario>
    </S.Container>
  )
}
export default Exibir;
