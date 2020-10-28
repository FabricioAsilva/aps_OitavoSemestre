import React, { useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
//import api from '../../services/api';
import typeIcons from '../../utils/typeIcons';
import Header from '../../components/Header';
import * as S from './styles';
import api from '../../services/api';

const  Exibir = (props) => {
    //const[redirect, setRedirect] = useState(false);
    const [tipo, setTipo] = useState();
    //const [id, setId] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const history = useHistory();
    const location = useLocation();
    console.log(location.pathname);
    let  id = 0;
    async function Caregar(){
        id  = props.match.params.id;
      //  if (id > 0 ) {
            await api.get(`/aps/${id}`)
            .then(response => {
               setTipo(response.data.tipo)
               setTitulo(response.data.titulo)
               setDescricao(response.data.descricao)
            })
       // }
    }
    async function Salva(){
        //Validação dos dados
        if(!tipo)
            return alert("Escolha um Tipo de lixo")
            else if(!titulo)
                return alert("Informe o Título!")
                else if(!descricao)
                    return alert("Descreva como descarta!")
            if(id){
                await api.put(`/aps/${id}`,{
                    tipo,
                    titulo,
                    descricao
                }).then(() =>
                   history.push("/")
                )
            }else{
        await api.post('/aps',{
            tipo,
            titulo,
            descricao
        }).then(() =>
           history.push("/")
        )
    }
    }
    async function Remove(){
        const res = window.confirm('Confirme a exclusão?')
        if(res === true){
            await api.delete(`/aps/${id}`)
            .then(() => 
            history.push("/"))
        }
    }
    useEffect(()=>{
        Caregar();
    })
    

  return (
    <S.Container>
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
                {location.pathname !== "/aps"  && <button type="button" onClick={Remove} >EXCLUIR</button>}
            </S.Options>
            <S.Salva>
                <button type="button" onClick={Salva} >SALVAR</button>
            </S.Salva>
        </S.Fomulario>
    </S.Container>
  )
}
export default Exibir;
