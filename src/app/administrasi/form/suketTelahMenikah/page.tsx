"use client";

import { HiArrowSmLeft } from "react-icons/hi";
import Link from "next/link";
import InputItem from "./inputItem";
import axios from "axios";
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

    const fd = new FormData(event.currentTarget);

    const data = {
      namepria: fd.get("namepria") as string, //raka tes
      nohppria: fd.get("nohppria") as string, //kelihatan kah
      tempatLpria: fd.get("tempatlahirpria") as string,
      tglLpria: fd.get("tglpria") as string,
      alamatpria: fd.get("alamatpria") as string,
      agamapria: fd.get("agamapria") as string,
      workpria: fd.get("workpria") as string,
      namewanita: fd.get("namewanita") as string,
      nohpwanita: fd.get("nohpwanita") as string,
      tempatLwanita: fd.get("tempatlahirwanita") as string,
      tglLwanita: fd.get("tglwanita") as string,
      alamatwanita: fd.get("alamatwanita") as string,
      agamawanita: fd.get("agamawanita") as string,
      workwanita: fd.get("workwanita") as string,
      tglnikah: fd.get("tglnikah") as string,
      lokasinikah: fd.get("lokasinikah") as string,
    };

    const resp = await postAPI("sukettelahmenikah/buat", data);
    if (resp.status) {
      setNama(data.namepria);
      setShowModal(true);
    }
  }
  return (
    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href="/administrasi" passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>

        <h1 className="font-bold">Surat Keterangan Telah Menikah</h1>
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
