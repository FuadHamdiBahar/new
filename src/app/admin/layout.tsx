'use client'
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
export default function DashboardLayout({

   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   const [isOpen, setOpen] = useState(false)
   const surat = [
      { id: 0, name: 'Surat Izin Membangun Sementara', to: '/admin/imbS' },
      { id: 1, name: 'Surat Pengantar dari Kantor Desa', to: '/admin/spDariDesa' },
      { id: 2, name: 'Surat Pengantar ke Kantor Desa', to: '/admin/spkedesa' },
      { id: 3, name: 'Surat Keterangan Aktif Perusahaan', to: '/admin/suketaktifperusahaan' },
      { id: 4, name: 'Surat Keterangan Belum Memiliki Rumah', to: '/admin/suketbelumpunyarumah' },
      { id: 5, name: 'Surat Keterangan Belum Terbit E-KTP', to: '/admin/suketblmktp' },
      { id: 6, name: 'Surat Keterangan Domisili', to: '/admin/suketdomisili' },
      { id: 7, name: 'Surat Keterangan Ghoib', to: '/admin/suketghoib' },
      { id: 8, name: 'Surat Keterangan Jabatan', to: '/admin/suketjabatan' },
      { id: 9, name: 'Surat Keterangan Kehilangan Kartu Keluarga', to: '/admin/suketkehilangankk' },
      { id: 10, name: 'Surat Keterangan Kehilangan STPD', to: '/admin/suketkehilanganstpd' },
      { id: 11, name: 'Surat Keterangan Kekerabatan Anak Kandung', to: '/admin/suketkekerabatan' },
      { id: 12, name: 'Surat Keterangan Lahir Desa', to: '/admin/suketlahirdesa' },
      { id: 13, name: 'Surat Keterangan Lokasi Tanah', to: '/admin/suketlokasitanah' },
      { id: 14, name: 'Surat Keterangan Menantu', to: '/admin/suketmenantu' },
      { id: 15, name: 'Surat Keterangan Penduduk Liar', to: '/admin/suketpendudukliar' },
      { id: 16, name: 'Surat Keterangan Penegasan Wilayah', to: '/admin/suketpenegasanwil' },
      { id: 17, name: 'Surat Keterangan Pengurusan PBB', to: '/admin/suketpengurusanpbb' },
      { id: 18, name: 'Surat Keterangan Pernyataan Waris', to: '/admin/suketpernyataanwaris' },
      { id: 19, name: 'Surat Keterangan Pisah Rumah', to: '/admin/suketpisahrumah' },
      { id: 20, name: 'Surat Keterangan Taksiran Tanah', to: '/admin/sukettaksirantanah' },
      { id: 21, name: 'Surat Keterangan Tanah', to: '/admin/sukettanah' },
      { id: 22, name: 'Surat Keterangan Tanah Belum Pernah Diperjualbelikan', to: '/admin/sukettbpd' },
      { id: 23, name: 'Surat Keterangan Telah Menikah', to: '/admin/suketTelahMenikah' },
      { id: 24, name: 'Surat Keterangan Untuk Nikah', to: '/admin/suketuntuknikah' },
      { id: 25, name: 'Surat Keterangan Pengurusan Kartu Keluarga', to: '/admin/suketuruskk' },
      { id: 26, name: 'Surat Keterangan Wali Orang Tua', to: '/admin/suketwaliortu' },
      { id: 27, name: 'Surat Pengantar Imunisasi', to: '/admin/superimunisasi' },
      { id: 28, name: 'Surat Perjanjian Utang Piutang', to: '/admin/superutangpiutang' },
      { id: 29, name: 'Surat Domisili Lembaga', to: '/admin/suratdomisililembaga' },
      { id: 30, name: 'Surat Keterangan Usaha', to: '/admin/suketusaha' },
      { id: 31, name: 'Surat Keterangan Beda Tanggal Lahir/Beda Data', to: '/admin/suketbedadata' },
      { id: 32, name: 'Surat Pengantar Keterangan Catatan Kepolisian', to: '/admin/suketcatatankepolisian' },
      { id: 33, name: 'Surat Keterangan Kematian', to: '/admin/suketkematian' },

      { id: 100, name: 'Survey', to: '/admin/survey' },
   ]
   return (
      <section>
         {/* Include shared UI here e.g. a header or sidebar */}
         <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <a href="https://sipakamaseta.com/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {/* <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg> */}
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
                        {surat.map((suratItem) =>
                           <li key={suratItem.id}>
                              <Link href={suratItem.to}>
                                 <p className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    {suratItem.name}
                                 </p>
                              </Link>
                              {/* <a href={suratItem.to} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{suratItem.name}</a> */}
                           </li>

                        )}
                        {/* <li>
                     <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li> */}
                     </ul>
                  </li>
                  <li>
                     <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" href='/admin/store'>
                        <FaStore className="w-5 h-5" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Ga'de</span>
                     </Link>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                     </a>
                  </li>
                  {/* <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
         </li> */}
                  {/* <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
         </li> */}
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                           <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                           <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>


         {children}

      </section>
   )
}