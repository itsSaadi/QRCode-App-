import Link from 'next/link';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container my-5" style={{fontFamily:'monospace',color:'purple'}}>
       <h2> Welcome to QrCode & Barcode  generator and Scanner</h2> 
       

      </div>

    </>
  )
}
