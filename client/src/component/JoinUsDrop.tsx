import React from 'react'
import styled from '@emotion/styled'

const Container=styled.div`
background-color: white;
color: black;
width: fit-content;
position: absolute;
top: 60px;
right: 60px;
`
const Button=styled.p`
cursor: pointer;
margin: 0;
padding: 20px 30px;
:hover{
    background-color: lightgreen;
}
`
const JoinUs:React.FC = () => {

    const join = ["Graduates","Experienced"]
  return (
    <Container>
        {join.map((item)=>
            <Button key={item}>{item}</Button>
        )}

    </Container>
  )
}

export default JoinUs