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
                        <tr key={item.id} className={"text-white " + (item.status == 0 ? 'bg-slate-500' : 'bg-green-500')}>
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
                                <a href={getDownloadURL(item.fileName)}>Unduh</a>
                                <button onClick={() => {
                                    deletePost(item);
                                }}
                                    type="button"
                                > Hapus</button>
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