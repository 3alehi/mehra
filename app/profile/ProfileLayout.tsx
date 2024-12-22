// components/profile/ProfileLayout.tsx
import Navbar from "@/components/Profile/Navbar";
import React from "react";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_80%] gap-7 mt-12">
      {/* Sidebar (Navbar) */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="h-fit ">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
