
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'

import ListSurat from '../components/listSurat';

export default function Page() {
    return (
        <div className='min-h-screen'>
            <nav className='max-w-full h-15 flex flex-row bg-white items-center'>

                <Link className="flex items-center" href='/' passHref replace>
                    <HiArrowSmLeft className='text-black h-10 w-10 m-4' ></HiArrowSmLeft>
                    <div className='mx-auto  w-screen justify-center'>
                        <p className='text-black font-bold'>Persuratan</p>
                    </div>
                </Link>
            </nav>
            <div className="mx-auto">
                <ListSurat />
            </div>
        </div>
    )
}