import React from 'react'
import Button from '../button/page'
import Image from 'next/image'
import { Labrada } from 'next/font/google'
import Link from 'next/link'

const fetchData = async () => {

    const data = await fetch('https://dummyjson.com/products')
    const result = await data.json()
    return result.products
}
const font = Labrada({
    weight: '700',
    subsets: ['latin']
})



export default async function Products() {

    const data = await fetchData()
    const currentPage = 1
    const itemsPerPage = 12;
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const currentProducts = data.slice(0, itemsPerPage)
    const handlePage = (page) => {
    }
    return (
        <>
            <div className="container my-5">
                <h1 className={font.className} > Data from Server Component</h1>
                <div className="row my-5">
                    {
                        currentProducts.map((items, index) => {
                            return (
                                <div className='col-md-2 '>
                                    <div class="card" key={index} style={{ width: 'auto', gap: '5px', margin: '10px' }}>
                                        <Image src={`${items.images[0]}`} className="card-img-top" width={50} height={100} />
                                        <div class="card-body">
                                            <h5 class="card-title">{items.title.slice(0, 7)}</h5>
                                            <p class="card-text">{items.price}</p>

                                            <Link className='btn btn-primary' href={`products/${items.id}`} >
                                                Details
                                            </Link>
                                            {/* <Button func={items.id} /> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
