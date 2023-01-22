import Head from 'next/head';
import React from 'react';
import  Footer  from './Footer';
import  Navbar  from './Navbar';


const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title> React Fullstack eCommerce Website</title>
      </Head>

      <header>
        <Navbar /> 
      </header>

      <div className="main-container">
        {children}
      </div>

      <footer>
        <Footer />   
      </footer>

    </div>
  )
}

export default Layout