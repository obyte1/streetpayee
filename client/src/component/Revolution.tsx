import React from 'react'
import styled from  "@emotion/styled"
import pic from "../assets/1.webp"
import pic1 from "../assets/2.png"
import pic2 from "../assets/3.png"



const Container = styled.div`
  min-height: 600px;
  width: 100%;
  background-color: whitesmoke;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
 `;

 const H2 = styled.div`
  text-align: center;
  font-size: 20px;
    font-weight: bold;



 `


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* margin-top: 50px; */

`;
const Avater = styled.img`
  height: 400px;
  width: 350px;
  object-fit: cover;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-top: 50px;

`;

const Revolution:React.FC = () => {
  return (
     <Container>
       <H2>Streetpaye is REVOLUTIONARY,
                 And THE game Changer in the <br />
                  Financial eco-system of Nigeria 
                 and Africa
              </H2>
       <Wrapper>
         <Avater src = {pic}  />
         <Avater src = {pic1}  />
         <Avater src = {pic2}  />
       </Wrapper>
    </Container>
  )
}

export default Revolution