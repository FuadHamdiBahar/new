'use client'

import  Paper  from '@mui/material/Paper'
import  BottomNavigation  from '@mui/material/BottomNavigation'
import  BottomNavigationAction  from '@mui/material/BottomNavigationAction'
import { useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';


export default function BottomNav() {
  const [value, setValue] = useState(0);

    return (

        <header className='sm:hidden'>
        <div>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                      {/* <Link href='/' passHref> */}
                          <BottomNavigationAction href="/" label="Home" icon={<HomeIcon />} />

                      {/* </Link> */}
                      {/* <Link href="/store" passHref> */}
                          <BottomNavigationAction href="/store" label="Ga'de" icon={<StorefrontIcon />} />            
                      {/* </Link> */}
                      {/* <Link href="/administrasi" passHref> */}
                          <BottomNavigationAction href="/administrasi" label="Administrasi" icon={<ArticleIcon />} />            
                      {/* </Link> */}
                  </BottomNavigation>
                </Paper>
              </div>
      </header>
    )
}