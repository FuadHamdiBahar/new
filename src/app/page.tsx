// 'use client'
import { FaShoppingBasket, FaPaperclip } from 'react-icons/fa'
import MobileNav from './components/navBar'
import SlideContent from './components/homeContent'
import Maps from './components/mapsDesa'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

// export const revalidate = 10

export default async function Home() {

  // async function dataProd() {
  //   const content = await prisma.post.findMany({
  //     take:6,
  //     where: {published: true},
  // })
  // }
  revalidatePath("/")


  return (
    <main className="">

      <MobileNav />

      <div className='bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto rounded-t-3xl'>
        <div className='justify-center rounded-lg'>
          <div className=' lg:justify-center overflow-hidden'>
            <div className='sm:flex sm:flex-col sm:px-5 my-10'>
              <p className='pt-4 pr-4 text-white text-md lg:text-lg text-center font-light'>Selamat Datang di</p>
              <p className='pt-2 pr-5 text-white sm:text-3xl lg:text-4xl text-center font-extrabold'>Website Desa Tamannyeleng</p>
              <div className="flex justify-evenly gap-8 mt-4">
                <Link href="/store">
                  <div className="flex gap-4 items-center my-6 py-6 px-8 rounded-lg hover:scale-90 transition text-xl bg-gradient-to-b from-slate-50 to-slate-300">
                    <FaShoppingBasket></FaShoppingBasket>
                    Saya ingin belanja.
                  </div>
                </Link>
                <Link href="/administrasi">
                  <div className="flex gap-4 items-center my-6 py-6 px-8 rounded-lg hover:scale-90 transition text-xl bg-gradient-to-b from-slate-50 to-slate-300">
                    <FaPaperclip></FaPaperclip>
                    Saya ingin mengurus surat.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white p-4 max-w-6xl mx-auto flex items-center flex-col rounded-md'>
          <div className='relative'>
            <img
              className='w-100 h-100 mx-auto saturate-50'
              alt='foto kantor'
              src='/kantordesa.jpg'
            />
            <p className='absolute text-white bottom-0 right-0 text-5xl lg:text-8xl font-extrabold text-center'>Profil Desa</p>
          </div>
          <p className='p-5'>Desa ini awalnya salah satu dusun di Desa Bontoala, Kecamatan Pallangga, Kabupaten Gowa. Kemudian dipisah menjadi desa tersendiri bernama Desa Persiapan Tamannyeleng, yang pada saat itu menjadi Kepala Desa Pertama adalah <span className='font-extrabold text-yellow-400'>Yasin Alauddin Karaeng Ngaseng</span>. Setelah resmi menjadi Desa Tamannyeleng, diadakan pemilihan kepala desa, dan terpilih H. S. Mukhtar Tuppu yang menjabat selama 7 tahun.</p>
          <div className=''>
            <ul className='font-bold text-4xl text-center list-none'>Daftar Dusun
              <li className='mt-4 text-center font-normal text-lg'>Ta'malalang Timur</li>
              <li className='text-center font-normal text-lg'>Ta'malalang Barat</li>
              <li className='text-center font-normal text-lg'>Mannyioi</li>
              <li className='text-center font-normal text-lg '>Tabbinjai</li>
              <li className='text-center font-normal text-lg '>Tamannyeleng</li>
            </ul>
          </div>
        </div>
        <div className='bg-sky-700 mt-5 max-w-6xl mx-auto rounded-md'>
          <div className="p-4">
            <div className='flex flex-row justify-between items-center px-4'>
              <p className=' text-4xl text-white font-bold'>Produk Ga'de</p>
              <Link href='/store'>
                <p className=' text-md text-white font-bold transition hover:text-yellow-300'>Lainnya {'>'}</p>
              </Link>
            </div>
            <SlideContent />
          </div>
        </div>
        <div className="mt-5 max-w-6xl mx-auto rounded-md">
          <Maps></Maps>
        </div>
      </div>
    </main>
  )
}
