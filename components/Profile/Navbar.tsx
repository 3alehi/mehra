"use client"
import React from "react";
import Follow from "../icons/Follow";
import Profile from "../icons/Profile";
import Address from "../icons/Address";
import Notif from "../icons/Notif";
import Message from "../icons/Message";
import LastSeen from "../icons/LastSeen";
import UserDetaile from "../icons/UserDetaile";
import LogOut from "../icons/LogOut";
import Order from "../icons/Order";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const currentPath = usePathname()

  const itemMenu = [
    { id: 1, title: "پروفایل من", icon: <Profile />, path: "/profile/me" },
    { id: 2, title: "سفارشات من", icon: <Order />, path: "/profile/order" },
    { id: 3, title: "آدرس‌های من", icon: <Address />, path: "/profile/address" },
    { id: 4, title: "لیست و اطلاع رسانی‌ها", icon: <Notif />, path: "/profile/wishlists" },
    { id: 5, title: "پیغام‌ها", icon: <Message />, path: "/profile/message" },
    { id: 6, title: "بازدیدهای اخیر", icon: <LastSeen />, path: "/profile/recents" },
    { id: 7, title: "اطلاعات کاربری", icon: <UserDetaile />, path: "/profile/edit" },
    { id: 8, title: "خروج", icon: <LogOut />, path: "/" },
  ];

  return (
    <div>
      <div className="w-full justify-center flex bg-lightBlueGray border border-lightGrayBlue rounded-2xl py-4 flex-col items-center">
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/1814/995e/c3f5ae40bbedd9d65c54716448d3b6bf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eG~PBweiIr99xdRKVzA2ymS-DS-no~hTA9dMlVEEmOM03OHGmUE~g26DJTT-mqz1CizcTeVdWd-alto0pvXmtOb~LLd3ofE95DXQqVrZRhN71oWRTPzSxQhEhPU1s32kDqJi7MvVWdpNyUfHrq3SQRXfN0rp1bCGRpF035PTEyfKW0nCB1Q77pGcrTDQeqdbr~rLR8Eu-cckSGepz09N1JZVrIdmpDiUT-xDXR7DJ8AO-zvfYNKvuSqZQEbPicH-EkViZti-N8VFCnS38KBJwXGjs8ylGAmM7GJfGYJebBmvVhN2OZvwijm4Sw3uTRhxlhe40lgnkoFFGCi1GdnUhA__"
            alt="Profile"
            className="w-36 h-36 rounded-full "
          />
          <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="..."
                fill="#515869"
              />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-xl text-darkGray">لیلا بهروز منش</p>
        <p className="text-sm text-darkGray">اصفهان</p>
        <p className="flex items-center mt-2 text-darkGray text-sm">
          <Follow /> <span className="mr-2"> 3678 دنبال کننده </span>
        </p>
        <p className="flex items-center mt-2 text-darkGray text-sm">
          <Follow /> <span className="mr-2"> 3678 دنبال شده </span>
        </p>
      </div>
      <ul className="mt-7">
        {itemMenu.map((item) => (
  <Link href={item.path} key={item.path}>
            <li
              className={`flex mb-6 items-center cursor-pointer0 transition-all duration-300 hover:text-aquaBlue hover:scale-105 ${
                currentPath === item.path ? "text-aquaBlue font-bold" : "text-darkGray"
              }`}
            >
              <i className="ml-5">{item.icon}</i>
              <span>{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
