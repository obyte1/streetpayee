import React, { useState } from 'react'
import styled from "@emotion/styled"
import {MdOutlineArrowDropDown} from "react-icons/md"
import log from "../assets/payelogo.png"
import JoinUsDrop from "./JoinUsDrop"
import Company from "./Company"



const Container = styled.div`
height: 70px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
background-color:whitesmoke;
color: #B32A24;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position: fixed;


`
const Logo = styled.div`
margin-left: 50px;
height: 60px;
width: 300px;
border-radius: 5px;
`
const Navigation = styled.div`
display: flex;
align-items: center;
margin-right: 50px;
`
const Nav = styled.div`
display: flex;
align-items: center;
cursor: pointer;
margin-right: 40px;
font-weight: bold;
position: relative;
`
const Icon = styled.div`
margin-top: 5px;
margin-left: 3px;
`
const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Header:React.FC = () => {
  const [showCompany, setShowCompany] = useState<boolean>(false)
  const [showJoin, setShowJoin] = useState<boolean>(false)

  const changeCompanyShow = ()=>{
    setShowCompany(!showCompany)
    setShowJoin(false)
  }
  const changeJoinShow = ()=>{
    setShowJoin(!showJoin)
    setShowCompany(false)
  }

  return (
    <Container>
       <Logo> <Img src={log} />  </Logo>
        <Navigation>
           <Nav>
            Personal
            <Icon> 
            <  MdOutlineArrowDropDown />
            
            </Icon>
           </Nav>
           <Nav>
            Business
           </Nav>
           <Nav onClick={changeCompanyShow}>
            Company
            <Icon> 
             <  MdOutlineArrowDropDown/>
             </Icon>
           </Nav>
           {showCompany? (
            <div>
              <Company changeCompany={changeCompanyShow} />
            </div>
           ): null}
           <Nav onClick={changeJoinShow}>
            Join Us
            <Icon> 
             <  MdOutlineArrowDropDown/>
             </Icon>
           </Nav>
           {showJoin? (
            <div>
              <JoinUsDrop changeJoin={changeJoinShow} />
            </div>
           ): null}

           
           
        </Navigation>
    </Container>
    
  )
}

export default Header