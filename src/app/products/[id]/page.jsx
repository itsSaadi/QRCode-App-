'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { useEffect } from 'react'


export default function ProductDetailPage() {
    const [data, setData] = useState({})
    const [image, setImage] = useState('')
    const { id } = useParams()

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json()
        const productDesired = result.products.find(x => x.id == id)
        setData(productDesired)
        const image = productDesired.images[0]
        setImage(image)

    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='container my-5'>
            <div className='col-md-2 '>
                <div class="card" style={{ width: '500px', gap: '5px', margin: '10px' }}>
                    <img src={image} className="card-img-top" width={50} height={200} />
                    <div class="card-body">
                        <h6 class="card-text">{data.brand}</h6>
                        <h6 class="card-title"><strong>{data.title}</strong></h6>
                        <h6 class="card-text">{data.description}</h6>
                        <h6 class="card-text"><strong>${data.price}</strong></h6>
                        <p class="card-text"> Ratings : <strong>{data.rating}</strong></p>
                        <Link href={'/products'} className="btn btn-success"> &#8592; Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
