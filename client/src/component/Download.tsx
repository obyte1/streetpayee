import React from 'react'
import styled from '@emotion/styled'
import pic2 from "../assets/app.png"
import pic3 from "../assets/agogo.png"
import pic from "../assets/download.png"

const Container = styled.div`
      min-height: 500px;
      width: 100%;
      background-color: silver;
`;
const Wrapper = styled.div`
     display: flex;
     margin-left: 10px;
     align-items: center;
     justify-content: center;

`;
const Dbooton = styled.div`
    


    h4{
        color: #a41313;
    }

`;
const But = styled.div`
      display: flex;
      height: 100px;
      width: 200px;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      border-radius: 10px;

      img{
        height: 50%;
        width: 50%;
        object-fit: cover;
      }
      
`;

const Hold= styled.div`
    height: 500px;
    width: 400px;
    margin-top: 20px;

    border-radius: 10px;

    
`
const Img = styled.img`
         height: 100%;
          width: 100%;
            object-fit: cover;
`;


const Download:React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <Dbooton>
                <h4>Download App</h4>
                <h3> Make a Seamless Payment Using just QR Code on the  <br /> StreetPaye App </h3>
                <But>
                       <img src= {pic2} /> 
                       <img src={pic3} /> 
                </But>
            </Dbooton>
            <Hold> <Img src= {pic} /> </Hold>
        </Wrapper>
 

    </Container>








  )
}

export default Download