import Image from 'next/image'
import Scanner from './components/Scanner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Barcode from './components/Barcode';

export default function Home() {
  return (
    <>
    <div className="container">

    <Scanner/>
    <Barcode/>
    </div>
    </>
  )
}
