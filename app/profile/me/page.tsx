import React from 'react';
import ProfileLayout from '../ProfileLayout';

const page: React.FC = () => {
    return (
        <ProfileLayout>
          <h1 className="text-xl font-bold">پروفایل من</h1>
          <p>این بخش اطلاعات کاربری شما را نمایش می‌دهد.</p>
        </ProfileLayout>
    )
};

export default page;