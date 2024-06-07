import React, { memo } from 'react'
import { Link } from 'react-router-dom/dist'
import { FaRegHeart, FaRegUser, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
    const likeCart = useSelector(state => state.wishlist.value).length
    const cartData = useSelector(state => state.cart.value).length

    return (
        <header className='w-full sticky top-0 z-50 text-black bg-white shadow-md'>
            <nav className='py-3 max-w-[1520px] mx-auto flex items-center justify-between'>
                <Link to={'/'} className='text-3xl text-blue-500'>RichEcom</Link>
                <div className='w-[600px] flex items-center bg-white rounded-xl border-2'>
                    <input className='w-[75%] input bg-white' type="search" placeholder="Search..." />
                    <select value={'all'} className='border-s-2 px-3 h-[40px] bg-white font-semibold'>
                        <option value="all">All type</option>
                        <option value="all2">All type</option>
                    </select>
                    <p className='w-[60px] h-[47.5px] flex items-center justify-center rounded-r-xl bg-blue-500'>
                        <FaSearch fontSize={20} />
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2 font-bold text-lg">
                    <Link to={'/user'} className='flex items-center justify-center gap-2 px-3 py-2 border-2 rounded-lg' >
                        <FaRegUser />
                        <span>User</span>
                    </Link>
                    <Link to={'/wishlist'} className='flex items-center justify-center gap-2 px-3 py-2 border-2 rounded-lg' >
                        <FaRegHeart />
                        <span>Wishlist</span>
                        {likeCart ? <sup className='ps-1'>{likeCart}</sup> : <></>}
                    </Link>
                    <Link to={'/cart'} className='flex items-center justify-center gap-2 px-3 py-2 border-2 rounded-lg' >
                        <FaShoppingCart />
                        <span>My Carts</span>
                        {cartData ? <sup className='ps-1'>{cartData}</sup> : <></>}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default memo(Header)