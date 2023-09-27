// import styled from '@emotion/styled'
// import React from "react"
// import pics from "../../assets/asset 0.svg"
// import {FaFacebook} from "react-icons/fa"
// import {AiFillInstagram} from "react-icons/ai"
// import {AiFillLinkedin} from "react-icons/ai"
// import {AiFillYoutube} from "react-icons/ai"
// import {AiOutlineTwitter} from "react-icons/ai"
// import FooterCard from './FooterCard'
// import IconCard from './IconCard'
// import {BiEnvelope} from "react-icons/bi"
// import  {BsPhone} from "react-icons/bs"


// const Container = styled.div`
//        background-color: #F0F5FF;
//         padding:40px;
//         display: flex;
//         margin-top:100px;
        


//         @media screen and (max-width:768px) {
//             display: flex;
//             flex-direction: column;
            
//         }
// `
// const First = styled.div`
//       p{
//         color: #73767E;
//       } 

// `
// const Wrapper = styled.div`
//      padding-top: 40px;
    
// `

// const Logo = styled.div`
//         /* padding: 40px; */
// `
// const IconBox = styled.div`
//        color: #050794;
    
       
       
// `
// const Box = styled.div`
      
// `
// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

// const Footer:React.FC = () => {

//     let title1: string = "Top Courses"
//     let title2:string = "Grow with Utiva"
//     let title3: string = "Schools"
//     let title4: string = "Company"
//     let title5: string = "Resources"
//     let title6: string = "Policies"
//     let title7: string = "Contact"
//     let title8: string = ""
//     let title9: string = ""
//     let title10: string = ""

//     let text1:string = "Data Analysis Bootcamp"
//     let text2:string = "individual"
//     let text3: string = "Data School"
//     let text4: string = "About Us"
//     let text5: string = "Blog"
//     let text6: string = "Terms and Conditions"
//     let text7 : string = "info@utiva.io"
//     let text8: string = "+2348035152982"
//     let text9: string = "+44 795 182 8717"
//     let text10: string = "012297777"

//     let content1:string="Data Science Bootcamp"
//     let content2:string = "Business"
//     let content3: string = "Design School"
//     let content4:string = "Learning Champions"
//     let content5:string= "FAQs"
//     let content6: string = "Refund Policy"

//     let context1:string = "Product Accelerator"
//     let context2:string = "impact"
//     let context3: string = "Product School"
//     let context4: string = "Our Partners"
//     let context5: string = "Events"
//     let context6: string = "Privcy Policy"

//     let write1: string = "Design Bootcamp"
//     let write2: string = "Utiva Kids"
//     let write3: string = "Programming Language"
//     let write4: string = "Become a Trainer"
//     let write5: string = "Success Stories"
//     let write6: string = ""
    
//     let utiva1: string= ""
//     let utiva2:string = " The Nucleus"
//     let utiva3: string = "Cloud Computing School"
//     let utiva4: string = "Alumni"
//     let utiva5: string = "Masterclass"
//     let utiva6: string = ""

//     let impact1 : string = ""
//     let impact2:string = "Ubuntu"
//     let impact3: string = "Blockchain Dev.School"
//     let impact4: string = "Careers"
//     let impact5: string = ""
//     let impact6:string= ""

//     let nucleus1: string = ""
//     let nucleus2:string = "Utiva Hire"
//     let nucleus3: string ="Marketing School"
//     let nucleus4: string= "Business Network"
//     let nucleus5: string = ""
//     let nucleus6: string = ""

//     let migrate1: string = ""
//     let migrate2 :string = "Utiva Migrate"
//     let migrate3: string = ""
//     let migrate4: string = "Podcast"
//     let migrate5: string = ""
//     let migrate6: string = ""
//   return (
//     <Container>
//     <First>
//        <Logo>
//         <img src= {pics}/>
//         </Logo> 
//         <p>We are the leading TECH EDUCATION company with students from over 30 countries and a <br/>leading UK accreditation to deliver the best digital workforce training.</p>

//         <IconBox>
//             {<FaFacebook/>}
//             {<AiFillInstagram/>}
//             {<AiFillLinkedin/>}
//             {<AiFillYoutube/>}
//             {<AiOutlineTwitter/>}
//         </IconBox>
//     </First>

//     <Wrapper>
//         <FooterCard
//         title = {title1}
//         text = {text1}
//         content={content1}
//         context={context1}
//         write = {write1}
//         utiva = {utiva1}
//         impact = {impact1}
//         nucleus = {nucleus1}
//         migrate = {migrate1}
        
//         />

//      <FooterCard
//         title = {title2}
//         text = {text2}
//         content={content2}
//         context={context2}
//         write = {write2}
//         utiva = {utiva2}
//         impact = {impact2}
//         nucleus = {nucleus2}
//         migrate = {migrate2}
        
//         />

          
//        <FooterCard
//         title = {title3}
//         text = {text3}
//         content={content3}
//         context={context3}
//         write = {write3}
//         utiva = {utiva3}
//         impact = {impact3}
//         nucleus = {nucleus3}
//         migrate = {migrate3}
        
//         />

//        <FooterCard
//         title = {title4}
//         text = {text4}
//         content={content4}
//         context={context4}
//         write = {write4}
//         utiva = {utiva4}
//         impact = {impact4}
//         nucleus = {nucleus4}
//         migrate = {migrate4}
        
//         />

//     </Wrapper>

//     <Box>

//         <FooterCard
//          title = {title5}
//          text = {text5}
//          content={content5}
//          context={context5}
//          write = {write5}
//          utiva = {utiva5}
//          impact = {impact5}
//          nucleus = {nucleus5}
//          migrate = {migrate5}
        
//         />

//         <FooterCard

//         title = {title6}
//         text = {text6}
//         content={content6}
//         context={context6}
//         write = {write6}
//         utiva = {utiva6}
//         impact = {impact6}
//         nucleus = {nucleus6}
//         migrate = {migrate6}
        
//         />

//         <IconCard
//         title = {title7}
//         icon = {<BiEnvelope/>}
//         text = {text7}
//         />

//         <IconCard
//         title = {title8}
//         icon = {<BsPhone/>}
//         text = {text8}
//         />

//        <IconCard
//         title = {title9}
//         icon = {<BsPhone/>}
//         text = {text9}
//         />

//         <IconCard
//         title = {title10}
//         icon = {<BsPhone/>}
//         text = {text10}
//         />

//     </Box>


//     </Container>
//   )
// }

// export default Footer