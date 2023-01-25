import React from 'react';
import { useState } from 'react';
import {  AiFillHeart, AiFillTag, AiFillWallet, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs'
import { IoMdClose, IoMdHelpCircle} from 'react-icons/io'
import {FaUserFriends} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiHappyAlt} from 'react-icons/bi'
import { data } from '../data/data.js';

const Navbar = () => {

    const [bags, setBags] = useState(data);
    const [nav, setNav] = useState(false);



      //search box

  const [searchValue, setSearchValue] = useState('');

  

  // const handleSearchChange = e => {
  //   setSearchValue(e.target.value)
  //   setBags (
  //     data.filter((item) =>{
  //       return item.category.toLowerCase.indexOf(searchValue) !== -1
  //     }))}
  



  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 z-10 bg-white">
     
      {/* left side nav */}
      <div className='flex items-center '>
        <div>
          <AiOutlineMenu size={30} className="cursor-pointer" onClick={()=>setNav(!nav)}/>
        </div>
        <h1 className='flex px-3 text-xl md:text-2xl lg:text-3xl'>
          Bag<span className='font-bold pl-1'>Corner</span>
        </h1>

        <div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 font-semibold text-[13px] mx-2'>
          <p className='bg-black rounded-full text-white p-2'>Men</p>
          <p  className='px-1'>Women</p>
        </div>
      </div>

      {/* search box */}
      <div className='flex justify-start bg-gray-200  items-center rounded-full w-[300px] lg:w-[500px] p-2 mx-2'  >
        <AiOutlineSearch size={20}/>
        <input type="text" placeholder='Search Product' className='bg-transparent focus:outline-none p-1 w-full text-[13px]'></input>
      </div>

    {/* cartbutton */}
    <button className='bg-black rounded-full text-white hidden md:flex items-center justify-center py-2 px-3 text-[13px] gap-1 cursor-pointer'>
    <BsFillCartFill />Cart
    </button>

    {/* mobile menu */}
    {/* overlay */}
    {nav ? <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0'></div> : '' }
    

    {/* side drawer menu */}
    <div className={nav ? 'fixed top-0 left-0 bg-white w-[300px] h-screen z-10 duration-300' : 'fixed top-0 left-[-100%] bg-white w-[300px] h-screen z-10 duration-300'}>
    <IoMdClose onClick={() => setNav(!nav)} size={20} className='absolute top-4 right-4 cursor-pointer'/>
    <h2 className='text-2xl absolute top-4 left-4'>Bag <span className='font-bold'>Corner</span> </h2>
    <ul className='absolute top-20 left-4 pt-5'>
        <li className='flex gap-2 text-xl items-center pb-8'><TbTruckDelivery size={20}/>Delivery</li>
        <li className='flex gap-2 text-xl items-center pb-8'><AiFillHeart size={20}/>Favorites</li>
        <li className='flex gap-2 text-xl items-center pb-8'><AiFillWallet size={20}/>Wallet</li>
        <li className='flex gap-2 text-xl items-center pb-8'><IoMdHelpCircle size={20}/>Help</li>
        <li className='flex gap-2 text-xl items-center pb-8'><AiFillTag size={20}/>Promos & Vouchers</li>
        <li className='flex gap-2 text-xl items-center pb-8'><BiHappyAlt size={20}/>Recommended for You</li>
        <li className='flex gap-2 text-xl items-center pb-8'><FaUserFriends size={20}/>Invite Friends</li>
    </ul>


    </div>

    </div>
  );
};

export default Navbar;
