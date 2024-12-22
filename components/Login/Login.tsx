import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

interface LoginProps {
    phoneNumber: string;
    setStep :  React.Dispatch<React.SetStateAction<number>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const Login: React.FC<LoginProps> = ({ phoneNumber, setPhoneNumber , setStep }) => {
    const [error, setError] = useState<string>('');

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneNumber(value);
    
    const phoneRegex = /^(09|989)[0-9]{9}$/;
    if (!phoneRegex.test(value)) {
      setError("شماره را صحیح وارد کنید");
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    const phoneRegex = /^(09|989)[0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("شماره را صحیح وارد کنید");
    } else {
      setError('');
      setStep(1)
    }
  };

  return (
    <div>
      <div className='w-full flex justify-center'>
        <p className='text-2xl w-full flex justify-center text-darkGray mt-8'>ورود / ثبت نام</p>
      </div>
      <div className='px-14'>
        <p className='text-darkGray text-lg mt-27'>لطفا شماره موبایل خود را وارد کنید</p>
        
        <Input
          className='border border-vibrantOrange rounded-2xl mt-4 outline-none py-4 text-darkGray px-7'
          dir='ltr'
          type='number'
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        
        {error && <p className="text-customRed mt-2 text-lg">{error}</p>}
      </div>
      <div className='w-full flex justify-center'>
        <Button
  disabled={!!error || !phoneNumber}      
       className='bg-aquaBlue hover:bg-teal-500 mb-12 w-[50%] mt-16 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95'
          onClick={handleSubmit}
        >
          ورود
        </Button>
      </div>
    </div>
  );
};

export default Login;
