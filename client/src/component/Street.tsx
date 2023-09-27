import React from 'react'
import styled from "@emotion/styled"


const Container = styled.div`
    min-height: 350px;
    width: 100%;
    justify-content: center;
    /* margin: 20px; */
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    
    
   
    

    p{
        /* width: 90%; */
        text-align: center;
        /* margin: 0 auto; */
       margin-top: 30px;
       
  
    }
`;

const Street:React.FC = () => {
  return (
    <Container>

        <p> 
            <br /><br />
        Streetpaye ensures all transactions initiated on the STREET are completed on the STREET and not at the 
bank as complains. <br /> <br />
Suitable for agricultural/famer transactions , highway purchases, low value purchases even in remote or 
isolated regions.  <br /> <br />
Streetpaye does not offer you 1000 services like most apps, we offer you only 1 service which is EASY   <br /> 
PAYMENT WITHOUT CASH. Therefore our app is simple , straight to the point and easy to use for ages 12 
to 90+  <br /> <br />
Streetpaye is the perfect e-replacement for all cash based transactions in Africa   


        </p>
    </Container>
  )
}

export default Street