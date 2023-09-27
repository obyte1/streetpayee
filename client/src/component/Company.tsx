import React from 'react'
import styled from "@emotion/styled"



const Container=styled.div`
background-color: white;
color: black;
width: fit-content;
position: absolute;
top: 60px;
right: 170px;

`
const Button=styled.p`
cursor: pointer;
margin: 0;
padding: 20px 30px;
:hover{
    background-color: lightgreen;
}
`

const CompanyDrop:React.FC = () => {

const company = ["About Us","Contact Us", "Press & Media", "CSR"]

  return (
    <Container>
        {company.map((text)=>
            <Button key={text}>{text}</Button>
        )}
    </Container>
  )
}

export default CompanyDrop