import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'


export default function Page() {
  return (
    <div className="min-h-screen">
      <div>
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>
      </div>
    </div>
  )
}