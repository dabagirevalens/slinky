import React from 'react'

import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <>
        <NavBar />

        <main className='main__container'>
            {children}
        </main>
    </>
  )
}

export default Layout