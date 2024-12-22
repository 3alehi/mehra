"use client"
import React, { useEffect, useState } from 'react';
import Back from '../icons/Back';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Button } from '../ui/button';

interface SmsProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    phoneNumber: string;
}

const Sms: React.FC<SmsProps> = ({ setStep, phoneNumber }) => {
    const [value, setValue] = React.useState<string>("")
    const [timeLeft, setTimeLeft] = useState<number>(120); 


  

    useEffect(() => {
        if (timeLeft <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const handleResend = () => {
        if (timeLeft > 0) return; 

        setTimeLeft(120); 

       
    };

    return (
        <div className='px-14'>
            <div className='mt-8 flex items-center w-[60%] justify-between'>
                <i className='cursor-pointer' onClick={() => setStep(1)}>
                    <Back />
                </i>
                <p className='text-darkGray text-2xl'>کد تایید</p>
            </div>
            <p className='mt-9 text-aquaBlue text-lg'>کد تایید برای شماره {phoneNumber} پیامک شد</p>
            <p className='text-lg text-darkGray mt-7'>کد تایید را وارد کنید</p>
            <div className='w-full flex justify-center mt-2'>
                <div className="space-y-2">
                    <InputOTP dir='ltr' 
                        maxLength={4}
                        value={value}
                        onChange={(value) => setValue(value)}
                    >
                        <InputOTPGroup className='flex gap-4'>
                            <InputOTPSlot className='rounded-lg border border-vibrantOrange' index={3} />
                            <InputOTPSlot className='rounded-lg border border-vibrantOrange' index={2} />
                            <InputOTPSlot className='rounded-lg border border-vibrantOrange' index={1} />
                            <InputOTPSlot className='rounded-lg border border-vibrantOrange' index={0} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
            </div>

            <div className='flex w-full justify-center mt-8 flex-col items-center'>
                <p className='text-darkGray text-lg'>
                  {!minutes && !seconds ? (
                        <span
                            className="cursor-pointer text-aquaBlue"
                            onClick={handleResend} 
                        >
                            دریافت مجدد
                        </span>
                    ) : (
                        <>
                            {minutes < 10 ? `0${minutes}` : minutes}:
                            {seconds < 10 ? `0${seconds}` : seconds}
                            <span className='ml-2'>مانده تا دریافت مجدد کد</span>
                        </>
                    )}
                </p>

                <Button
                disabled={value.length != 4}
                    className='bg-aquaBlue hover:bg-teal-500 mb-12 w-[70%] mt-16 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95'
                >
                    ورود
                </Button>
            </div>
        </div>
    );
};

export default Sms;
