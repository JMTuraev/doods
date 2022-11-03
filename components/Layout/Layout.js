import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

function Layout({children}) {
    return (
        <div className=' overflow-x-hidden  '>
                <div className='col-span-12'>
                    <Header/>
                </div>
                <div className='col-span-12 whitespace-nowrap'>
                    <Navbar/>
                </div>

            <main className='col-span-12'> {children}</main>
        </div>
    )
}

export default Layout