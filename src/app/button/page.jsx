'use client'
import Link from 'next/link'
import React from 'react'

export default function Button({func}) {
   
  return (
   <>
   <Link href={`/products/${func}`} className="btn btn-success" onClick={()=>alert(func)}>
    Details
   </Link>
   </>
  )
}
