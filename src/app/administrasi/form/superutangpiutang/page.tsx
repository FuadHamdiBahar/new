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
      alamat: formData.get("alamat") as string,
      work: formData.get("work") as string,
      umur: formData.get("umur") as string,
      name_dua: formData.get("name_dua") as string,
      alamat_dua: formData.get("alamat_dua") as string,
      work_dua: formData.get("work_dua") as string,
      umur_dua: formData.get("umur_dua") as string,
    };
    let resp = await postAPI("superUtangPiutang/buat", data);
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

        <h1 className="font-bold">Surat Perjanjian Utang Piutang</h1>
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
