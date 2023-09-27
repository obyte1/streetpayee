import React from 'react'
import styled from '@emotion/styled'
import pic from "../assets/GADGET-removebg-preview.png"

const Container = styled.div`
min-height: 600px;
width: 100%;
background-color: whitesmoke;
align-items: center;
justify-content: center;


`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  

`;
const Fhold = styled.div`
   /* margin-left: 70px; */
   margin-top: 10px;
   

   h2{
    color: #e71212;
    font-size: 50px;
    /* margin-left: 50px; */
    font-weight: bolder;
   }
  

  h4{
    width: 400px;
    /* margin-top: 50px; */
    /* margin-left: 50px; */

  }

  p{
    font-weight: bold;
    margin-bottom: 10px;
    /* margin-left: 30px; */
  }
`;

const Imagehold = styled.div`
      height: 450px;
      width: 500px;
      margin-top: 100px;
      border-radius: 10px;
      
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

`;


const Hero:React.FC = () => {
  return (
    <Container>
     <Wrapper>
      <Fhold>
      
      <h2>StreePaye</h2>
      <p>....pay anywhere, anytime</p>
    
      <br />
      <br />
      
      <h4>Nigerias First QR code e-wallet for P2P, P2B  <br /> and   transactions   over social media apps.</ h4>
      </Fhold>
      <Imagehold>
        <Img src= {pic} />
      </Imagehold>
     </Wrapper>

    </Container>
  )
}

export default Hero