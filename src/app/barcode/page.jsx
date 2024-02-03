'use client'
import React, { useState } from 'react'
import QRCode from "react-qr-code";
import  {useEffect}  from 'react';



export default function Barcode() {
    const [text, setText] = useState('')

    const handleInput = () => {
        const data = document.getElementById('input').value
        setText(data)
    }
    useEffect(() => {
        console.warn('warning')
    }, [])
    return (
        <div className='container my-5'>
            <div className='my-5'>
                <QRCode value={text} />
            </div>
            <input type="text" placeholder='Generate Barcode' id='input' /> <br />
            <button className="btn btn-success my-3" onClick={() => handleInput()}>Generate</button>
        </div>
    )
}
