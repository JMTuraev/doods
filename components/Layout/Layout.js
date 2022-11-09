import React from 'react'
import Header from './Header'

function Layout({children}) {
    return (
        <div className='flex flex-col overflow-x-hidden h-screen '>
            <div className='  bg-red-200  '>
                <Header/>
            </div>
            <div className=' h-full bg-green-200  border pt-4   '>
                <main className=''> {children}</main>
            </div>
        </div>
    )
}

export default Layout