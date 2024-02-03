import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">QRCode</Link>
                    
                    <div className=" navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href='/barcode' >Generate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href='/scanner' >Scan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href='/products' >Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href='/reacthooks' >React Hooks</Link>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
   </>
  )
}
