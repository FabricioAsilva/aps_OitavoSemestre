import styled from 'styled-components';

export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const Fomulario = styled.div`
  width:90%;
`
export const typeIcons = styled.div`
    width:90%;
    display:flex;
    justify-content: center;

    .inative{
        opacity:0.5;
    }

    button{
        border: none;
        background:none;
        padding: none;
    }
    img {
        width:100%;
        height:65px;
        margin: 5px;
        cursor: pointer;

        &:hover{
            opacity:0.7;
        }
    }
`
export const Input = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;

    span{
        font-weight: bold;
        color:#20295F;
        margin: 20px 0px 0px 20px;
    }

    input{
        font-size: 15px;
        padding: 15px;
        margin: 20px;
        border:none;
        border-bottom: 2px solid #20295F;
    }
`
export const TextArea = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 20px;
    border: 2px solid #20295F;

    textarea{
        font-size: 16px;
    }

`
export const Options = styled.div`
    width: 90%;
    display:flex;
    justify-content:flex-end;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    button {
        font-weight: bold;
        color: #FE0303;
        border: none;
        background: none;
        font-size: 18px;
    }
    
`
export const Salva = styled.div`
    width: 90%;
    margin:20px 20px;
    display:flex;

    button{
        width:100%;
        color:#20295F;
        background: #15990B;
        font-size: 20px;
        font-weight: bold;
        padding:10px;
        border-radius: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
    }
    
`