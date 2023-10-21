"use client";

import { HiArrowSmLeft } from "react-icons/hi";
import Link from "next/link";
import InputItem from "./inputItem";
import ModalSurvey from "@/app/administrasi/survey/ModalSurvey";
import axios from "axios";
import React from "react";
import { postAPI } from "@/utils/api";

export default function Page() {
    const [isModalOpen, setShowModal] = React.useState(false);
    const closeModal = () => {
        setShowModal(false);
    };
    const [nama, setNama] = React.useState("");

    async function submitData(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = {
            nalemb: formData.get("nalemb") as string,
            nohp: formData.get("nohp") as string,
            alamat: formData.get("alamat") as string,
            tempatberdiri: formData.get("tempatberdiri") as string,
            tglberdiri: formData.get("tglberdiri") as string,
            luastanah: formData.get("luastanah") as string,
            luasbangunan: formData.get("luasbangunan") as string,
            dusun: formData.get("dusun") as string,
        };

        let resp = await postAPI("suratdomisililembaga/buat", data);

        if (resp.status) {
            setNama(data.nalemb);
            setShowModal(true);
            console.log(resp.status);
        }
    }

    return (
        <div className="min-h-screen">
            <div className="flex flex-row items-center">
                <Link href="/administrasi" passHref>
                    <HiArrowSmLeft className="h-10 w-10 m-4" />
                </Link>

                <h1 className="font-bold">Surat Domisili Lembaga</h1>
            </div>

            <form className="w-full max-w-lg mx-auto p-4" onSubmit={submitData}>
                <InputItem></InputItem>
            </form>

            <ModalSurvey
                show={isModalOpen}
                onClose={closeModal}
                name={nama}
            ></ModalSurvey>
        </div>
    );
}
