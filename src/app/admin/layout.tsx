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
                     <a href="https://sipakamaseta.com/wp-admin/edit.php" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
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
                              <a href={suratItem.to} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{suratItem.name}</a>
                           </li>
                        )}
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

               </ul>
            </div>
         </aside>


         {children}

      </section>
   )
}