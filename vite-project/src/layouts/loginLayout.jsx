import React from 'react'
import { Outlet } from 'react-router'
 
export const LoginLayout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <main className="flex- p-4">
                <Outlet />
            </main>
        </div>
    )
}