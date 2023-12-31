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
      name: formData.get("name") as string,
      nohp: formData.get("nohp") as string,
      nik: formData.get("nik") as string,
      alamat: formData.get("alamat") as string,
      gender: formData.get("gender") as string,
      work: formData.get("work") as string,
      agama: formData.get("agama") as string,
      rtrw: formData.get("rtrw") as string,
      dusun: formData.get("dusun") as string,
    };

    console.log(data);


    const resp = await postAPI("suketblmpunyarumah/buat", data);
    if (resp.status) {
      setNama(data.name);
      setShowModal(true);
    }
  }
  return (
    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href="/administrasi" passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>

        <h1 className="font-bold">Surat Keterangan Belum Punya Rumah</h1>
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
