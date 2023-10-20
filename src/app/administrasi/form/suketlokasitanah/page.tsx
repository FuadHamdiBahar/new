"use client";

import { HiArrowSmLeft } from "react-icons/hi";
import Link from "next/link";
import InputItem from "./inputItem";
import ModalSurvey from "@/app/administrasi/survey/ModalSurvey";
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
      namepemilik: formData.get("namepemilik") as string,
      nohp: formData.get("nohp") as string,
      alamattanah: formData.get("alamattanah") as string,
      luastanah: formData.get("luastanah") as string,
      luasbangunan: formData.get("luasbangunan") as string,
      dusun: formData.get("dusun") as string,
      nosertiftanah: formData.get("nosertiftanah") as string,
    };

    const resp = await postAPI("suketlokasitanah/buat", data);
    if (resp.status) {
      setNama(data.namepemilik);
      setShowModal(true);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href="/administrasi" passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>
        <h1 className="font-bold">Surat Keterangan Lokasi Tanah</h1>
      </div>
      <form className="w-full max-w-lg mx-auto p-4" onSubmit={submitData}>
        <InputItem />
      </form>

      <ModalSurvey
        show={isModalOpen}
        onClose={closeModal}
        name={nama}
      ></ModalSurvey>
    </div>
  );
}
