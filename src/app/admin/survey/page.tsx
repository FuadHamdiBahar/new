'use client';
import React from "react"
import { revalidatePath, } from "next/cache"
import { getAPI } from "@/utils/api"
import { getBaseUrl } from "@/utils/helper";

interface PostItem {
    id_survey: string,
    nama: string,
    rating: string,
    kritik_saran: string,
    praktis: string,
    cepat: string,
    informasi: string,
    modern: string,
    pelayanan: string,
    created_at: string,
}

export default async function Page() {

    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("survey/all", {});
                if (resp.status) {
                    setPostItem(resp.data.data);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="min-h-screen ml-64 p-4">

            <table className="table-auto">
                <thead className="bg-slate-700 text-md text-slate-400 ">
                    <tr className="">
                        <th className="p-3">Dibuat pada</th>
                        <th className="p-3">Nama</th>
                        <th className="p-3">Rating</th>
                        <th className="p-3">Kritik Saran</th>
                        <th className="p-3">Praktis</th>
                        <th className="p-3">Cepat</th>
                        <th className="p-3">Informasi</th>
                        <th className="p-3">Modern</th>
                        <th className="p-3">Pelayanan</th>

                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item: any) =>

                        <tr className="bg-slate-500 text-white">
                            <td className="p-3">{String(item.created_at)}</td>
                            <td className="p-3">{item.nama}</td>
                            <td className="p-3">{item.rating}</td>
                            <td className="p-3">{item.kritik_saran}</td>
                            <td className="p-3">{item.praktis}</td>
                            <td className="p-3">{item.cepat}</td>
                            <td className="p-3">{item.informasi}</td>
                            <td className="p-3">{item.modern}</td>
                            <td className="p-3">{item.pelayanan}</td>
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