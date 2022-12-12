import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <div style={{display: 'flex', justifyContent: 'center', padding:20}}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout