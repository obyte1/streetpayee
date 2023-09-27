import React from 'react'
import GlobalStyle from './component/Globalstyle'
import Header from './component/Header'
import Landingpage from './component/Landingpage'
import Footer from "./component/Footer"

const App:React.FC = () => {
  return (
    <div>
      <GlobalStyle  />
      <Header  />
      <Landingpage  />
      <Footer  />


    </div>
  )
}

export default App