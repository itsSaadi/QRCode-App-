'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {useEffect}  from 'react';

export default function Home() {
  useEffect(() => {
    console.warn('warning')
  }, [])
  return (
    <>
      <div className="container my-5" style={{ fontFamily: 'monospace', color: 'purple' }}>
        <h2> Welcome to QrCode & Barcode  generator and Scanner</h2>
      </div>

    </>
  )
}
