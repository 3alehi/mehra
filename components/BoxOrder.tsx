import React from 'react';
import Tick from './icons/Tick';
import OrderHow from './OrderHow';
import Arrow from './icons/Arrow';
import Cancel from './icons/Cancel';
interface BoxOrderProps{
    wich : number
}
const BoxOrder: React.FC<BoxOrderProps> = ({wich}) => {
    return (
        <div className='w-full bg-lightBlueGray rounded-2xl py-9 px-8'>
     <div className='flex justify-between items-center'>
     <div className='flex flex-row items-center'>
   {wich === 1 &&(
       <p className='flex bg-white  py-1 px-4 items-center w-fit  text-aquaBlue rounded-2xl'>
       <Tick/>
       <span className='mr-2'>    ارسال شده
       </span>
   </p>
   )}
     {wich === 2 &&(
       <p className='flex bg-white  py-1 px-4 items-center w-fit  text-aquaBlue rounded-2xl'>
       <Tick/>
       <span className='mr-2'>    تحویل شده
       </span>
   </p>
   )}
        {wich === 3 &&(
       <p className='flex bg-white  py-1 px-4 items-center w-fit  text-aquaBlue rounded-2xl'>
       <Tick/>
       <span className='mr-2'>    دریافت شد 
       </span>
   </p>
   )}
   {wich === 4 &&(
       <p className='flex bg-white  py-1 px-4 items-center w-fit  text-soft-red rounded-2xl'>
        <Cancel/>
       <span className='mr-2'>    لغو توسط کارشناس

       </span>
   </p>
   )}

            <p className='text-darkGray mx-6  '>
            کد سفارش ۸۴۶۹۲۵۶۲
            </p>
            <p className='text-darkGray'>400,000 تومان</p>
      </div>
      <div>
        <p className='text-darkGray'>۲ دی ۱۳۹۸</p>
      </div>
     </div>
     <div className='mt-5 flex gap-4'>
     <OrderHow/>
     <OrderHow/>
     <OrderHow/>
     <OrderHow/>

     </div>
     <div className='w-full flex justify-end mt-3'>
        <p className='flex text-customGray mx-6 cursor-pointer'>دریافت فاکتور <span className='mr-2'><Arrow/></span></p>
        <p className='flex text-customGray cursor-pointer'> جزئیات سفارش <span className='mr-2'><Arrow/></span></p>
     </div>
        </div>
    );
};

export default BoxOrder;