'use client'
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { getAPI } from "@/utils/api"
import React from "react"

interface PostItem {
   id: string,
   name: string,
   to: string,
   jumlah: number
}

export default function DashboardLayout({

   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {

   const [postItem, setPostItem] = React.useState<PostItem[]>([]);

   React.useEffect(() => {
      const fetchData = async () => {
         try {
            const resp = await getAPI("data", {});
            if (resp.status) {
               setPostItem(resp.data.data);
            }
         } catch (error) {
            console.error("An error occurred:", error);
         }
      };

      // Call the async function
      fetchData();
   }, []);

   const [isOpen, setOpen] = useState(false)

   return (
      <section>
         {/* Include shared UI here e.g. a header or sidebar */}
         <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <a href="https://sipakamaseta.com/wp-admin/edit.php" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <AiFillHome className="w-5 h-5"></AiFillHome>
                        <span className="ml-3">Home</span>
                     </a>
                  </li>
                  <li>
                     <button type="button" onClick={() => setOpen(!isOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <AiFillMail className="w-5 h-5"></AiFillMail>
                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Surat</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                     </button>
                     <ul id="dropdown-example" className={`py-2 space-y-2 ${isOpen ? "block" : "hidden"}`}>
                        {postItem.map((suratItem) =>
                           <li>
                              <Link href={suratItem.to}>
                                 <p className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    {suratItem.name}
                                    <p className={"rounded-lg p-2 " + (suratItem.jumlah == 0 ? '' : 'bg-slate-300')}>
                                       {suratItem.jumlah}
                                    </p>
                                 </p>
                              </Link>
                           </li>
                        )}
                     </ul>
                  </li>
                  <li>
                     <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" href='/admin/store'>
                        <FaStore className="w-5 h-5"></FaStore>
                        <span className="flex-1 ml-3 whitespace-nowrap">Ga'de</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </aside>


         {children}

      </section>
   )
}