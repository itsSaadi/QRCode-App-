'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';

export default function layout({children}) {
 
    return (
        <>
            <Navbar/>

            {children}
            </>
    )
}
