'use client'
import Link from 'next/link';
import { postAPI } from "@/utils/api";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { HiArrowSmLeft } from 'react-icons/hi';
import { NumericFormat } from 'react-number-format';
import { redirect } from 'next/dist/server/api-utils';

export default function Page() {
    const { push } = useRouter();
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const uploadToClient = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            // console.log(i);

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    async function submitData(event: any) {
        event.preventDefault();

        // const file = event.target.files[0]
        const formData = new FormData(event.currentTarget);
        formData.append('file', image);

        let resp = await postAPI("product/buat", formData);

        if (resp.status) {
            console.log(resp);

            // redirect('/store')
            push('/store');
        }
    }

    return (
        <div className="min-h-screen">
            <div className='flex flex-row content-center p-4'>
                <Link className='flex m-2 hover:text-gray-500' href="/store">
                    <HiArrowSmLeft className='h-6 w-6 t m-2 ext-black' />
                    <h1 className="font-bold text-center m-2">Tambah Produk Kamu</h1>
                </Link>
            </div>

            <form className='mx-auto w-full max-w-lg p-3' id='addStore' onSubmit={submitData} encType='mult'>
                <div className='flex flex-col'>
                    <div className='flex flex-wrap mx-4 mb-4'>
                        <label className='font-semibold w-full' htmlFor="">Nama Produk</label>
                        <input className='w-full bg-gray-200 rounded-lg' type="text" name="title" />
                    </div>
                    <div className='flex flex-wrap mx-4 mb-4'>
                        <label className='font-semibold w-full' htmlFor="">Kontak</label>
                        <input className="w-full bg-gray-200 rounded-lg" name='kontak' type='text' />
                    </div>
                    <div className="flex flex-wrap mx-4 mb-4">
                        <label className="font-semibold w-full" htmlFor="">Harga Produk</label>
                        <NumericFormat
                            name="price"
                            className="w-full bg-gray-200 rounded-lg"
                            thousandSeparator
                            allowLeadingZeros={false}
                            allowNegative={false}
                        />
                    </div>
                    <div className='flex flex-wrap mx-4 mb-4'>
                        <label className='font-semibold w-full' htmlFor="image">Gambar Produk</label>
                        <input type="file" name="myImage" onChange={uploadToClient} />
                        {/* <input className='w-full bg-gray-200 rounded-lg' type="file" accept=".png, .jpg, .jpeg" name="image" /> */}
                    </div>
                    <div className='flex flex-wrap mx-4 mb-4'>
                        <img src={createObjectURL} />
                    </div>
                    <div className="mx-4">
                        <button type="submit" className="bg-gray-900 rounded-lg text-white p-3">+ Buat Produk</button>
                        {/* <Button variant="outlined" type='submit'>
                            Tambah Produk
                        </Button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}