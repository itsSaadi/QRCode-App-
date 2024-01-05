import Image from 'next/image'
import Scanner from './components/Scanner'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <div className="container">

    <Scanner/>
    </div>
    </>
  )
}
