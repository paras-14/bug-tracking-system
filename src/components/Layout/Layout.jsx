import React from 'react'
import "./Layout.scss"

const Layout = ({children}) => {
  return (
    <div className='web-screen'>
        {children}
    </div>
  )
}

export default Layout