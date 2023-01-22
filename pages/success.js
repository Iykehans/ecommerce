import { useStateContext } from '@/context/StateContext';
import { runFireWorks } from '@/lib/utils';
import Link from 'next/link'; 
import React, { useState, useEffect} from 'react';
import { BsBagCheckFill } from 'react-icons/bs/';


const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems(0);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks(); 
    })
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2> Thank you for your order</h2>
            <p className="email-msg">Your order has been placed successfully</p>
            <p className="description">
                If you have any questions, please contact
                    <a className="email" href="mail@orders@example.com">orders@example.com</a>
            </p>
            <Link href="/">
                <button type="button" className="btn btn-primary" width="300px">
                Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success