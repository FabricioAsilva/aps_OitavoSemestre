
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 70px;
background: #0699FF;
border-bottom: 6px solid #4400aa;

display: flex;
`
export const LeftSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
padding-left: 20px;

img {
    width: 90px;
    height: 50px;
}

`
export const RightSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 20px;

a {
    color: #fff;
    font-weight:bold;
    text-decoration:none;
    margin: 0 20px;

    &:hover{
        color:#4400aa
    }
}

`