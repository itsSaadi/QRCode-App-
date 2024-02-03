'use client'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
export const ThemeContext = React.createContext('light');


export default function ReactHooks() {
    const theme = useContext(ThemeContext)
    const [state, setState] = useState(0)
    const [message, setMessage] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        console.log('State is updated')
        setMessage('State Valuee')
    }, [state])
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://dummyjson.com/products')
            const result = await data.json()
            const trimData=result.products.slice(1,3)
            // console.log(trimData)
            setData(trimData)
        }
        getData()
    }, [])
    return (
        <>
            <div className="container my-5">
                <strong style={{ backgroundColor: 'aqua' }}>Important React Hooks</strong>
                <div>
                    <strong style={{ backgroundColor: 'yellow' }}>1.UseState Hook</strong>
                    <p>The useState hook allows you to add state to a functional component. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it.</p>
                    <p> <strong>{state}</strong></p>
                    <button className="btn btn-primary" onClick={() => setState(state + 1)}>Update Value (+)</button>
                    {state > 0 ? <button className="btn btn-danger mx-4" onClick={() => setState(state - 1)}>Update Value (-)</button> : null}
                </div>
                <div className='my-2'>
                    <strong style={{ backgroundColor: 'yellow' }}>2.UseEffect Hook</strong>
                    <p>The useEffect hook allows you to perform side effects in a functional component. Side effects include things like fetching data from an API, updating the DOM, or subscribing to an event.</p>
                    <p>Example 1.<strong>{message + " " + state}  (see console for better understanding)</strong></p>
                    <div>
                        Example 2. <strong>{data.map((items, index) => {
                           return <ul key={index}>
                                <li>{items.title}</li>
                                <img src={items.images[0]} alt="" height={50} width={50} />
                            </ul>
                        })}</strong>  (Data From APi Called in UseEffect)
                    </div>

                </div>
                <div className="my-3">
                    <strong style={{ backgroundColor: 'yellow' }}>3.UseContext Hook (Better to use reduxJs-Toolkit instead of this)</strong>
                    <p style={{ background: theme === 'light' ? 'aqua' : 'yellow' }} className='my-3'>The useContext hook allows you to access a context object in a functional component. Context is a way to pass data down the component tree without having to pass props manually.</p>
                    <strong style={{ color: theme === 'light' ? 'purple' : 'aqua' }}>The color of this text and bg color of above text is from useContext</strong>
                </div>
            </div>
        </>
    )
}
