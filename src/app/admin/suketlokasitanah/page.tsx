'use client';
import React from "react"
import { revalidatePath, } from "next/cache"
import { getAPI, deleteAPI } from "@/utils/api"
import { getBaseUrl } from "@/utils/helper";

interface PostItem {
    id: string,
    createdAt: string,
    namepemilik: string,
    alamattanah: string,
    luastanah: string,
    luasbangunan: string,
    dusun: string,
    nosertiftanah: string,
    status: string,
    fileName: string,
}

export default async function Page() {
    async function refreshData() {
        // 'use server'
        revalidatePath('/admin/suketlokasitanah')

    }

    function getDownloadURL(filename: string): string {
        return getBaseUrl() + 'download?filename=' + filename + '&form=SuketLokasiTanah';
    }

    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("suketlokasitanah/all", {});
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

    const deletePost = async (item: any) => {
        try {
            const url = "suketlokasitanah/delete/" + item.id;
            const response = await deleteAPI(url);

            if (response.status) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen ml-64 p-4">

            <table className="table-auto">
                <thead className="bg-slate-700 text-md text-slate-400 ">
                    <tr className="">
                        <th className="p-3">Dibuat pada</th>
                        <th className="p-3">Nama Pemilik</th>
                        <th className="p-3">No HP</th>
                        <th className="p-3">Alamat Tanah</th>
                        <th className="p-3">Dusun</th>
                        <th className="p-3">Nomor Sertifikat Tanah</th>
                        <th className="p-3">Aksi</th>

                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item: any) =>
                        <tr key={item.id} className={"text-white " + (item.status == 0 ? 'bg-slate-500' : 'bg-slate-900')}>
                            <td className="p-3">{String(item.createdAt)}</td>
                            <td className="p-3">{item.namepemilik}</td>
                            <td className="p-3">
                                <a href={`https://wa.me/${item.nohp}`}>
                                    {item.nohp}
                                </a>
                            </td>
                            <td className="p-3">{item.alamattanah}</td>
                            <td className="p-3">{item.dusun}</td>
                            <td className="p-3">{item.nosertiftanah}</td>
                            <td className="p-3">
                                <a href={getDownloadURL(item.fileName)} className="p-2 bg-green-500 rounded-lg">Unduh</a>
                                <button onClick={() => { deletePost(item); }} className="ml-2 p-2 bg-red-500 rounded-lg" type="button">
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}