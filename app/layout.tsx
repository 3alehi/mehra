"use client"
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";  
import Head from "next/head";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient(); // ایجاد یک کلاینت برای React Query

  const pathname = usePathname();  

  return (
    <html lang="en" dir="rtl">
      <body>
      
        {pathname !== "/login" && <Navbar />}
        
        <div className="container mx-auto font-vazirmatn">
          <div className="mt-5">
        
          {pathname !== "/login" &&    <BreadcrumbWithCustomSeparator/>}
          </div>
          <QueryClientProvider client={queryClient}>


          {children}
          </QueryClientProvider>

          <Toaster position="bottom-left" />
        </div>
      </body>
    </html>
  );
}
