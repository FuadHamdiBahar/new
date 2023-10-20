import Link from 'next/link'
import { HiArrowSmRight } from 'react-icons/hi';

const surat = [
    { id: 0, name: 'Surat Izin Membangun Sementara', to: '/administrasi/form/imbS' },
    { id: 1, name: 'Surat Pengantar dari Kantor Desa', to: '/administrasi/form/spDariDesa' },
    { id: 2, name: 'Surat Pengantar ke Kantor Desa', to: '/administrasi/form/spkedesa' },
    { id: 3, name: 'Surat Keterangan Aktif Perusahaan', to: '/administrasi/form/suketaktifperusahaan' },
    { id: 4, name: 'Surat Keterangan Belum Memiliki Rumah', to: '/administrasi/form/suketbelumpunyarumah' },
    { id: 5, name: 'Surat Keterangan Belum Terbit E-KTP', to: '/administrasi/form/suketblmktp' },
    { id: 6, name: 'Surat Keterangan Domisili', to: '/administrasi/form/suketdomisili' },
    // { id: 7, name: 'Surat Keterangan Ghoib', to: '/administrasi/form/suketghoib' },
    { id: 8, name: 'Surat Keterangan Jabatan', to: '/administrasi/form/suketjabatan' },
    { id: 9, name: 'Surat Keterangan Kehilangan Kartu Keluarga', to: '/administrasi/form/suketkehilangankk' },
    { id: 10, name: 'Surat Keterangan Kehilangan STPD', to: '/administrasi/form/suketkehilanganstpd' },
    { id: 11, name: 'Surat Keterangan Kekerabatan Anak Kandung', to: '/administrasi/form/suketkekerabatan' },
    { id: 12, name: 'Surat Keterangan Lahir Desa', to: '/administrasi/form/suketlahirdesa' },
    { id: 13, name: 'Surat Keterangan Lokasi Tanah', to: '/administrasi/form/suketlokasitanah' },
    { id: 14, name: 'Surat Keterangan Menantu', to: '/administrasi/form/suketmenantu' },
    { id: 15, name: 'Surat Keterangan Penduduk Liar', to: '/administrasi/form/suketpendudukliar' },
    { id: 16, name: 'Surat Keterangan Penegasan Wilayah', to: '/administrasi/form/suketpenegasanwil' },
    { id: 17, name: 'Surat Keterangan Pengurusan PBB', to: '/administrasi/form/suketpengurusanpbb' },
    { id: 18, name: 'Surat Keterangan Pernyataan Waris', to: '/administrasi/form/suketpernyataanwaris' },
    // { id: 19, name: 'Surat Keterangan Pisah Rumah', to: '/administrasi/form/suketpisahrumah' },
    // { id: 20, name: 'Surat Keterangan Taksiran Tanah', to: '/administrasi/form/sukettaksirantanah' },
    // { id: 21, name: 'Surat Keterangan Tanah', to: '/administrasi/form/sukettanah' },
    // { id: 22, name: 'Surat Keterangan Tanah Belum Pernah Diperjualbelikan', to: '/administrasi/form/sukettbpd' },
    { id: 23, name: 'Surat Keterangan Telah Menikah', to: '/administrasi/form/suketTelahMenikah' },
    // { id: 24, name: 'Surat Keterangan Untuk Nikah', to: '/administrasi/form/suketuntuknikah' },
    { id: 25, name: 'Surat Keterangan Pengurusan Kartu Keluarga', to: '/administrasi/form/suketuruskk' },
    { id: 26, name: 'Surat Keterangan Wali Orang Tua', to: '/administrasi/form/suketWaliOrtu' },
    { id: 27, name: 'Surat Pengantar Imunisasi', to: '/administrasi/form/superimunisasi' },
    { id: 28, name: 'Surat Perjanjian Utang Piutang', to: '/administrasi/form/superutangpiutang' },
]
export default function ListSurat() {

    return (
        <div className='bg-sky-700 rounded-tr-3xl rounded-tl-3xl h-screen mx-auto sm:rounded-none p-3 overflow-y-auto '>
            {surat.map((item) =>
                <div key={item.id} className='mx-auto shadow-xl transition ease-in-out bg-yellow-400 max-w-md p-4 m-2 pt-3 rounded-md hover:scale-90'>
                    <Link href={item.to} className="flex flex-row" passHref>
                        <h1 className='text-white flex-1'>
                            {item.name}
                        </h1>
                        <HiArrowSmRight className='h-6 w-6 text-white hover:text-gray-300' />
                    </Link>
                </div>
            )}
        </div>
    )
}