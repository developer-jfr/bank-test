import styled from 'styled-components'
import { Link as LinkR } from "react-router-dom";


export const BankContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

`

export const BankWrapper = styled.div`
padding: 100px 20px 20px 20px;
`

export const BankCard = styled.div`
background: #000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;




&:hover
{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}


`

export const BankIcon = styled.img`
height: 100px;
width: 180px;
margin-bottom: 10px;

`

export const BankH1  = styled.h1`
font-size: 2.5rem;
color: #000;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
  font-size: 2rem;
}

`

export const BankH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: #fff;
`

export const BankP = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`

export const BankBtn = styled(LinkR)`

border-radius: 50px;
background: #5dc399;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;

}
`
export const BankBtnWrap = styled.nav`
padding-top: 20px;
display: flex;
align-items: center;

`
