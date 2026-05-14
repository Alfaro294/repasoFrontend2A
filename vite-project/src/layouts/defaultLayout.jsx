import React from 'react'
import Nav from '../componets/Nav'
import { Outlet } from 'react-router'
 
const DefaultLayout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Nav />
            <main className="flex- p-4">
                <Outlet />
            </main>
        </div>
    )
}
 
export default DefaultLayout