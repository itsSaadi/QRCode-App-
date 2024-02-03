"use client";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react';
import custom from '../custom.module.css'
export default function Scanner() {
  const [scanResult, setScanResult] = useState(null)
  const [color,setColor]=useState('red')

  useEffect(() => {
    console.warn('warning')
  }, [])

const scannerProgress=()=>{
  const scanner = new Html5QrcodeScanner('qr-reader', {
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 10
  })
  scanner.render(success, error)

  function success(result){
    scanner.clear()
    setScanResult(result)
  }

  function error(result){
    console.warn(result)
  }
}



  return (
    <div className='container my-5'>
      <h1 className={color=='red'?custom.color:custom.color2}>QR Code and Bar Code Scanner</h1>
      {
        scanResult ? <div>Success : <a target='_blank' href={`${scanResult}`}>{scanResult}</a> </div> :
         <div id='qr-reader'></div>
      }
      <div>
        <button className='btn btn-success my-3' onClick={()=>scannerProgress()}>
        Start Scanner
        </button>
      </div>
    </div>

  );
}