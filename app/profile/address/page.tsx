"use client"
import React from 'react';
import ProfileLayout from '../ProfileLayout';
import { motion } from 'framer-motion';
import Location from '@/components/icons/Location';
import { div } from 'framer-motion/client';
import LocationEmpty from '@/components/icons/LocationEmpty';

const page: React.FC = () => {
    const address = ""
    return (
        <div>
                    <ProfileLayout>
                        
        <div className='flex items-center justify-between'>
        <div className="flex mb-3 relative">
            <div
              className="relative"
            >
              <p
                className={`px-5 cursor-pointer mb-2  ${
           'text-turquoise' 
                }`} 
              >


آدرس های من


              </p>
                <motion.div
                  layoutId="underline"
                  className="absolute rounded-2xl bottom-0 left-0 w-full mt-2"
                  style={{
                    height: '3px',
                    backgroundColor: '#36BABB', 
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </div>
        </div> 
        <p
  className="flex items-center text-aquaBlue border rounded-2xl py-3 px-8 cursor-pointer mb-2 transform transition-all duration-300 hover:bg-aquaBlue hover:text-white hover:scale-105 active:scale-95"
>
  <Location /> <span className="mr-3">ثبت آدرس جدید</span>
</p>
            </div>        
        <div className="border rounded-2xl border-lightGrayBlue2 py-6 px-4">
{!address &&(
    <div className='w-full h-[426px]'>
<div className="flex justify-center items-center flex-col h-full">
  <div className="flex justify-center items-center flex-col">
    <p className='px-5 py-5 bg-lightBlueGray rounded-full'>
    <LocationEmpty />

    </p>
    <p className="text-lg text-customGray mt-4">هنوز آدرسی ثبت نکرده‌اید</p>
  </div>
</div>

    </div>
)}
        </div>

                       </ProfileLayout>

        </div>
    );
};

export default page;