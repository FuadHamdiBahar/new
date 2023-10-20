'use client'

import Link from 'next/link'
import Image from 'next/image'
import {HiMenuAlt3} from 'react-icons/hi'
import  Paper  from '@mui/material/Paper'
import  BottomNavigation  from '@mui/material/BottomNavigation'
import  BottomNavigationAction  from '@mui/material/BottomNavigationAction'
import { useState } from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';


export default function MobileNav() {
  const [value, setValue] = useState(0);
    // let [view, setView] = useState(false)

    // function openView() {
    //     setView(true)
    // }

    // function closeView() {
    //     setView(false)
    // }
    return (
      // <div>
        
      // </div>
        <header className=''>
        
        <nav className='bg-white h-20 mx-auto  max-w-full flex flex-row rounded-b-lg items-center justify-between p-3 lg:px-8'>
        <div className='flex flex-row content-center justify-center mx-auto sm:mx-0'>
          <div className='flex items-center gap-2'>
            <Image className='m-2' 
            width={50} 
            height={50} 
            src='/SIPAKAMASETA.png' 
            alt='pic'/>
            {/* <p className='font-bold text-4xl text-center'>SIPAKAMASETA</p> */}
          </div>
        </div>
        <div className='flex content-center gap-5'>
          {/* <h2 className='text-black hover:text-red-400 hidden sm:block'>
            Web Title
          </h2> */}
          <Link className='text-black hover:text-red-700 hidden sm:block' href='/store'>
            Ga'de
          </Link>
            <Link className='text-black hover:text-red-700 hidden sm:block' href='/administrasi'> 
              Administrasi 
            </Link>
            {/* Mobile Menu dropdown */}
            <div className='flex content-center my-auto'>
              {/* <button>
                 <HiMenuAlt3  className='h-6 w-6 block sm:hidden'/>
              </button> */}

            </div>
        </div>

        </nav>
        <div>
              </div>
              
              
      </header>
    )
}