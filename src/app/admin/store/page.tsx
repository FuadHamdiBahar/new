'use client';
import React from "react"
import { getAPI, deleteAPI } from "@/utils/api"
import { getBaseUrl } from "@/utils/helper";

interface PostItem {
    title: string,
    content: string,
    published: string,
    kontak: string,
    price: string,
}

export default async function Page() {
    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("product/all", {});
                if (resp.status) {
                    setPostItem(resp.data.data);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        fetchData();
    }, []);

    const deletePost = async (item: any) => {
        try {
            const url = "product/delete/" + item.id;
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
                        <th className="p-3">Nama</th>
                        <th className="p-3">Nomor HP</th>
                        <th className="p-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item: any) =>
                        <tr key={item.id} className={"text-white " + (item.published == 0 ? 'bg-slate-500' : 'bg-slate-500')}>
                            <td className="p-3">{String(item.createdAt)}</td>
                            <td className="p-3">{item.title}</td>
                            {/* <td className="p-3">{item.published}</td> */}
                            <td className="p-3">
                                <a href={`https://wa.me/${item.kontak}`}>
                                    {item.kontak}
                                </a>
                            </td>
                            <td className="p-3">
                                {/* <a href={getDownloadURL(item.fileName)} className="p-2 bg-green-500 rounded-lg">Unduh</a> */}
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