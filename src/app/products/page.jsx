'use client'
import React from 'react'
import Button from '../button/page'

const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products')
    const result = await data.json()
    return result.products
}

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
                <h1 style={{ fontFamily: 'monospace' }}> Data from Server Component</h1>
                <div className="row my-5">
                    {
                        currentProducts.map((items, index) => {
                            return (
                                <div className='col-md-2 '>
                                    <div class="card" key={index} style={{ width: 'auto', gap: '5px', margin: '10px' }}>
                                        <img src={`${items.images[0]}`} class="card-img-top" alt="..." height={'120px'} width={'30px'} />
                                        <div class="card-body">
                                            <h5 class="card-title">{items.title.slice(0, 7)}</h5>
                                            <p class="card-text">{items.price}</p>
                                            <Button func={items.id} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <button className="button btn btn-success" onClick={() => handlePage(currentPage + 1)}>Next</button>
                    <button className="button btn btn-warning" onClick={() => handlePage(currentPage - 1)}>Previous</button>
                </div>
            </div>
        </>
    )
}
