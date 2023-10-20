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
    tempatL: string,
    tglL: string,
    gender: string,
    agama: string,
    work: string,
    nik: string,
    alamat: string,
    dusun: string,
    status: string,
    fileName: string,
}

export default async function Page() {
    async function refreshData() {
        // 'use server'
        revalidatePath('/admin/suketpisahrumah')
    }

    function getDownloadURL(filename: string): string {
        return getBaseUrl() + 'download?filename=' + filename;
    }

    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("suketpisahrumah/all", {});
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
                        <th className="p-3">Nomor HP</th>
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
                            <td className="p-3">{item.nohp}</td>
                            <td className="p-3">{String(item.status)}</td>
                            <td className="p-3">
                                <a href={getDownloadURL(item.fileName)}>Unduh</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}