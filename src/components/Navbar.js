import React from 'react'
import { onlineshoping } from '../assets/MediaCall'

function Navbar() {
  return (
    <div className="w-auto h-auto p-8 flex justify-between items-center bg-rose-100">
    {/*-- ----------------------------               ------*/}
    <div>
        <ul className="flex gap-4">
            <li className="w-[30px] h-[30px]">
                <img src={onlineshoping.user} alt=""></img>
            </li>
            <li className="w-[30px] h-[30px]">
                <img src={onlineshoping.user1} alt=""></img>
            </li>
            <li className="w-[30px] h-[30px]">
                <img src={onlineshoping.user2} alt=""></img>
            </li>
        </ul>
    </div>
    {/*-- ----------------------------               ------*/}
    <div className='sm:block hidden'>
        <ul className="flex gap-5 font-bold">
            <li>
                <span>HOME</span>
            </li>
            <li>
                <span>SHOP</span>
            </li>
            <li>
                <span>SALE</span>
            </li>
            <li>
                <span>STORE</span>
            </li>
            <li>
                <span>CONTACT</span>
            </li>
        </ul>
    </div>
    {/*-- ----------------------------               ------*/}
    <div className='sm:block hidden'>
        <img className="w-[50px] h-[50px] " src={onlineshoping.user3} alt=""></img>
    </div>
   
    {/*-- ----------------------------               ------*/}
</div>


  )
}

export default Navbar