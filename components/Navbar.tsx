import Image from 'next/image';
import React from 'react';
import Card from './icons/Card';
import { Button } from './ui/button';
import Login from './icons/Login';
import Search from './icons/Search';
import Link from 'next/link';
import Category from './Category';

const Navbar: React.FC = () => {
    return (
        <div className='w-full pt-4 font-vazirmatn sticky top-0 bg-white z-40'>
            <div className='container mx-auto py-4 '>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center w-[60%]'>
                     <Link href={"/"}>
                     <Image
                            alt='logo-mehra'
                            src={"/Mehra.png"}
                            width={167}
                            height={27}
                        /></Link>
                        <div className='border lightGrayBlue2 rounded-3xl w-[573px] px-6 py-3 mr-14 flex items-center justify-between text-customGray '>
                            <input type="text" className='w-[90%]  border-none outline-none  text-lg '  placeholder='جستجوی محصول ، تولیدکننده و..'/>
                        <Search/>
                        </div>
                    </div>
                    <div className='flex items-center w-[30%] justify-end'>
                        <Link href={"/login"} className='flex border rounded-lg py-3 px-3 items-center cursor-pointer text-slate-custom font-medium' aria-label="Login/Register">
                            <Login />
                            <span className='mr-4'>ورود / ثبت نام</span>
                        </Link>
                        <i className='cursor-pointer mr-6'>
                            <Card />
                        </i>
                    </div>
                </div>
                
            </div>
            <Category/>
        </div>
    );
};

export default Navbar;
