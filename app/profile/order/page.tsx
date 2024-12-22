"use client"
import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import ProfileLayout from '../ProfileLayout';
import BoxOrder from '@/components/BoxOrder';

const Page: React.FC = () => {
  const items = [
    { id: 1, title: "جاری" },
    { id: 2, title: "تحویل شده" },
    { id: 3, title: "مرجوع شده" },
    { id: 4, title: "لغو شده" }
  ];

  const [activeItem, setActiveItem] = useState<number>(1);

  useEffect(() => {
    setActiveItem(1);
  }, []);

  return (
    <div>
      <ProfileLayout>
        <div className="flex mb-3 relative">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative"
              onClick={() => setActiveItem(item.id)} 
            >
              <p
                className={`px-5 cursor-pointer mb-2 border-l ${
                  activeItem === item.id ? 'text-turquoise' : 'text-customGray'
                }`} 
              >
                {item.title}
              </p>
              {activeItem === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute rounded-2xl bottom-0 left-0 w-full mt-2"
                  style={{
                    height: '3px',
                    backgroundColor: '#36BABB', 
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="border rounded-2xl border-lightGrayBlue2 py-6 px-4">
        {activeItem === 1 &&<>
       <div className='flex gap-4 flex-col'>
       <BoxOrder  wich={activeItem}/> <BoxOrder wich={activeItem}/> <BoxOrder wich={activeItem}/>

       </div>
       </>}       {activeItem === 2 &&<>
       <div className='flex gap-4 flex-col'>
       <BoxOrder wich={activeItem}/> <BoxOrder wich={activeItem}/> <BoxOrder wich={activeItem}/>

       </div>
       </>}
       {activeItem === 3 &&<>
       <div className='flex gap-4 flex-col'>
       <BoxOrder wich={activeItem}/> <BoxOrder wich={activeItem}/> <BoxOrder wich={activeItem}/>

       </div>
       </>}
       {activeItem === 4 &&<>
       <div className='flex gap-4 flex-col'>
       <BoxOrder wich={activeItem}/> <BoxOrder wich={activeItem}/> <BoxOrder wich={activeItem}/>

       </div>
       </>}
        </div>
      </ProfileLayout>
    </div>
  );
};

export default Page;
