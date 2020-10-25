import styled from 'styled-components';

export const Container= styled.div`
width:150px;
height: 30px;
background: ${props => props.actived ? `#EE6826` : '#20295F' };
padding: 10px;
cursor: pointer;

border-radius: 8px;

display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;

span{
    color: #fff;
    font-weight: bold;
    //align-self: flex-end;
    font-size: 20px;
    align-items:center;
}

&:hover{
    background: #EE6826;
}

`