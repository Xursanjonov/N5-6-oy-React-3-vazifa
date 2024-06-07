import React, { memo } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const carts = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D'

const CartShopProducts = () => {
    return (
        <section className='p-10 flex items-start justify-center gap-5'>
            <div className="flex-1 w-[700px] flex flex-col items-start justify-center gap-8 border-2">
                <h1 className='text-3xl font-semibold text-black'>Your shopping cart</h1>
                <div className="card-item flex items-start gap-4">
                    <img className='w-[200px] rounded-lg' src={carts} />
                    <div className="w-[450px] flex flex-col">
                        <h5 className='text-xl font-semibold'>Lorem ipsum dolor sit amet.</h5>
                        <p className='text-md text-gray-600'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className=" flex items-center justify-center">
                        <button className='p-2 rounded-md bg-orange-500'> <FaMinus /> </button>
                        <h5 className='text-2xl w-[90px] text-center font-semibold'>1</h5>
                        <button className='p-2 rounded-md bg-green-500'> <FaPlus /> </button>
                    </div>
                </div>
            </div>
            <div className="flex-2">
                <h1></h1>
            </div>
        </section>
    )
}

export default memo(CartShopProducts)