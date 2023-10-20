'use client';
import React from "react"
import { revalidatePath, } from "next/cache"
import { getAPI, deleteAPI } from "@/utils/api"
import { getBaseUrl } from "@/utils/helper";

interface PostItem {
    id: string,
    createdAt: string,
    namepria: string,
    nohppria: string,
    tempatLpria: string,
    tglLpria: string,
    agamapria: string,
    workpria: string,
    alamatpria: string,
    namewanita: string,
    nohpwanita: string,
    tempatLwanita: string,
    tglLwanita: string,
    agamawanita: string,
    workwanita: string,
    alamatwanita: string,
    tglnikah: string,
    lokasinikah: string,
    status: string,
    fileName: string,
}

export default async function Page() {
    async function refreshData() {
        // 'use server'
        revalidatePath('/admin/suketTelahMenikah')

    }

    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("sukettelahmenikah/all", {});
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

    function getDownloadURL(filename: string): string {
        return getBaseUrl() + 'download?filename=' + filename + '&form=SuketTelahMenikah';
    }

    const deletePost = async (item: any) => {
        try {
            const url = "sukettelahmenikah/delete/" + item.id;
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
                        <th className="p-3">Nama Pria</th>
                        <th className="p-3">Nomor HP Pria</th>
                        <th className="p-3">Aksi</th>

                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item: any) =>
                        <tr key={item.id} className={"text-white " + (item.status == 0 ? 'bg-slate-500' : 'bg-green-500')}>
                            <td className="p-3">{String(item.createdAt)}</td>
                            <td className="p-3">{item.namepria}</td>
                            <td className="p-3">
                                <a href={`https://wa.me/${item.nohp}`}>
                                    {item.nohp}
                                </a>
                            </td>
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
        </div>
    )
}