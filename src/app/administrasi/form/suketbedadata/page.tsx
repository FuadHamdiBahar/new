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
            namaSalah: formData.get("namaSalah") as string,
            tanggalLahirSalah: formData.get("tanggalLahirSalah") as string,
            namaBenar: formData.get("namaBenar") as string,
            tanggalLahirBenar: formData.get("tanggalLahirBenar") as string,
            nohp: formData.get("nohp") as string,
        };


        let resp = await postAPI("suketbedadata/buat", data);
        if (resp.status) {
            setNama(data.namaBenar);
            setShowModal(true);
        }
    }

    return (
        <div className="min-h-screen">
            <div className="flex flex-row items-center">
                <Link href="/administrasi" passHref>
                    <HiArrowSmLeft className="h-10 w-10 m-4" />
                </Link>

                <h1 className="font-bold">Surat Keterangan Beda Tanggal Lahir/Beda Data</h1>
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
