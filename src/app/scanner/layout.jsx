'use client'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '../Navbar';

export default function layout({children}) {
    let path=usePathname()
 
    return (
        <>
            <Navbar/>

            {children}
            </>
    )
}
