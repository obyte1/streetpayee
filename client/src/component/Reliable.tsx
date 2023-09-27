import React from 'react'
import styled from '@emotion/styled'
import pic from "../assets/herimg.png"

const Container = styled.div`
    min-height: 90vh;
    width: 100%;
    background-color: whitesmoke;
`;
const Wrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
`;
const Imagehold = styled.div`
         height: 450px;
         width: 450px;
         
         border-radius: 10px;
         

`;
const Most = styled.div`
    

    p{
        width: 500px;
    }

`;
const Img = styled.img`
    
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Reliable:React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <Imagehold>
                <Img src= { pic} />
            </Imagehold>
            <Most>
                <h2>The Most Reliable, Simple & <br /> Friendly Online Payment <br />System</h2>
                <p>No matter the condition of the telecom network , 
bank server or internet service, your transaction is 
always SUCCESSFUL.  <br />
<br />
Finally, NO MORE incomplete transactions, 
reversal, declined transaction , declined 
transactions, waiting for confirmation SMS, need 
to print POS receipts , harassment by sellers 
during delayed transactions.  <br /> <br />
Enter your PIN in your own language.  <br /> <br />
No more need for account reconciliation for POS 
operators <br /> <br />
Complete transactions without the seller having 
details of your name and card number on 
receipts.  <br /> <br />
Send QR code image over whatsapp to buy and 
sell</p>
            </Most>
        </Wrapper>
    </Container>
  )
}

export default Reliable