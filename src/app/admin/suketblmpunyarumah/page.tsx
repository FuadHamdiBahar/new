'use client';
import React from "react"
import { revalidatePath, } from "next/cache"
import { getAPI } from "@/utils/api"
import { getBaseUrl } from "@/utils/helper";

interface PostItem {
    id: string,
    createdAt: string,
    name: string,
    nohp: string,
    nik: string,
    alamat: string,
    gender: string,
    agama: string,
    work: string,
    rtrw: string,
    dusun: string,
    status: string,
    fileName: string,
}

export default async function Page() {
    async function refreshData() {
        // 'use server'
        revalidatePath('/admin/suketblmpunyarumah')

    }

    function getDownloadURL(filename: string): string {
        return getBaseUrl() + 'download?filename=' + filename;
    }

    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("suketblmpunyarumah/all", {});
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

    return (
        <div className="min-h-screen ml-64 p-4">

            <table className="table-auto">
                <thead className="bg-slate-700 text-md text-slate-400 ">
                    <tr className="">
                        <th className="p-3">Dibuat pada</th>
                        <th className="p-3">Nama</th>
                        <th className="p-3">NIK</th>
                        <th className="p-3">Alamat</th>
                        <th className="p-3">Jenis Kelamin</th>
                        <th className="p-3">Pekerjaan</th>
                        <th className="p-3">Agama</th>
                        <th className="p-3">RT/RW</th>
                        <th className="p-3">Dusun</th>
                        <th className="p-3">Status Surat</th>
                        <th className="p-3">Aksi</th>

                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item: any) =>

                        <tr className="bg-slate-500 text-white">
                            <td className="p-3">{String(item.createdAt)}</td>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">{item.nik}</td>
                            <td className="p-3">{item.alamat}</td>
                            <td className="p-3">{item.gender}</td>
                            <td className="p-3">{item.work}</td>
                            <td className="p-3">{item.agama}</td>
                            <td className="p-3">{item.rtrw}</td>
                            <td className="p-3">{item.dusun}</td>
                            <td className="p-3">{String(item.status)}</td>
                            <td className="p-3">
                                <a href={getDownloadURL(item.fileName)}>Unduh</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* <div className="flex flex-col gap-3 w-full bg-slate-400 max-w-3xl mx-auto mt-3">
            {postItem.map((item) =>
            <div className="bg-gray-400 rounded-lg max-w-xl p-4 " >
                <div className="flex flex-row gap-4 items-center ">

                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.kontak}</p>
                    <p>{String(item.published)}</p>
                    <div className="flex flex-row gap-4">
                        <button className="bg-green-500 p-2 rounded-md">set true</button>
                        <button className="bg-red-500 p-2 rounded-md">set false</button>
                    </div>                
                </div>
            </div> 

            )}
                </div> */}
        </div>
    )
}