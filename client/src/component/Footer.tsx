import React from 'react'
import styled from '@emotion/styled'


const Company =styled.div`
display: flex;
flex-direction: column;
`
const Resources =styled.div`
display: flex;
flex-direction: column;
`
const Discover =styled.div`
display: flex;
flex-direction: column;
`
const Address =styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
`

const Container =styled.div`
display: flex;
justify-content: space-between;
padding: 0 200px;
padding-bottom: 70px;
background-color: #B32A24;;
color: white;
font-size: 19px;
line-height: 30px;
h4{
    font-weight: 800;
    margin-bottom: 30px;
    margin-top: 80px;
}

nav{
    margin-bottom: 10px;
    color: white;
    cursor: pointer;
    
}
`
export const Footer:React.FC = () => {
  return (
    <Container>
        <Company>
            <h4>Company</h4>
            <nav>About us</nav>
            <nav>Join our team</nav>
            <nav>Press & Media</nav>
            <nav>Contact us</nav>
            
        </Company>
        <Resources>
            <h4>Resources</h4>
            <nav>Privacy policy</nav>
            <nav>Terms of service</nav>
            <nav>Service Level Agreement</nav>
            <nav>Service Catalog</nav>
            <nav>Documentation</nav>
            <nav>Security</nav>
        </Resources>
        <Discover>
            <h4>Discover</h4>
            <nav>Personal</nav>
            <nav>Business</nav>
        </Discover>
        <Address>
            <h4>Address</h4>
            
        </Address>
    </Container>
  )
}
export default Footer