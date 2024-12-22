"use client"
import React, { useState } from 'react';
import Back from '../icons/Back';
import { Input } from '../ui/input';
import ShowPass from '../icons/ShowPass';
import UnShowPass from '../icons/UnShowPass';
import Arrow from '../icons/Arrow';
import { Button } from '../ui/button';
interface PasswordProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;

}
const Password: React.FC<PasswordProps> = ({ setStep }) => {
    const [password , setPassword] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)
    
    return (
        <div className='px-14'>
            <div className='mt-8 flex items-center w-[60%] justify-between'>
                <i className='cursor-pointer' onClick={() => setStep(0)}>
                    <Back />

                </i>
                <p className='text-darkGray text-2xl'>رمز عبور</p>
            </div>
            <div>
                <p className='text-lg text-darkGray mt-24'>رمز عبور خود را وارد کنید</p>
                <div className='bg-white flex items-center justify-center mt-4 border rounded-2xl  border-vibrantOrange '>
                    {!show ? <i onClick={() => setShow(true)} className='cursor-pointer'><ShowPass /></i>
                        : <i className='cursor-pointer' onClick={() => setShow(false)}><UnShowPass /></i>}
                    <Input value={password} onChange={e=> setPassword(e.target.value)} type={!show ? 'password' : "text"} className='text-2xl l w-[90%] border-none' />

                </div>
            </div>
            <ul className='mt-8'>
                <li className='my-4 text-darkGray text-lg flex items-center  cursor-pointer ' onClick={ () => setStep(2)}>ورود با رمز یکبار مصرف  <i className='mx-2'><Arrow/></i></li>
                <li className='text-darkGray text-lg flex items-center cursor-pointer  ' onClick={ ()=> {setStep(3)}}>فراموشی رمز عبور  <i className='mx-2'><Arrow/></i></li>

            </ul>
         <div className='w-full flex justify-center'>
         <Button
         
         disabled={password.length < 4}
       className='bg-aquaBlue hover:bg-teal-500 mb-12 w-[60%] mt-16 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95'
        >
          ورود
        </Button>
         </div>
        </div>
    );
};

export default Password;