"use client";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react';
export default function Scanner() {
  const [scanResult, setScanResult] = useState(null)

  // useEffect(() => {
    
  // }, [])

const scannerProgress=()=>{
  const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 5
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
      <h1 style={{fontFamily:'monospace',color:'purple'}}>QR Code Scanner</h1>
      {
        scanResult ? <div>Success <a href={"http://" + scanResult}>{scanResult}</a> </div> :
         <div id='reader'></div>
      }
      <div>
        <button className='btn btn-success my-3' onClick={()=>scannerProgress()}>
        Start Scanner
        </button>
      </div>
    </div>

  );
}
