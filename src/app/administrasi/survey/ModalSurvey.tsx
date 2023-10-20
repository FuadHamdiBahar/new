import React from "react";
import Rating from "@mui/material/Rating";
import { postAPI } from "@/utils/api";
import { ModalSurveyProps } from "./modalSurveyProps";
import { revalidatePath, } from "next/cache"

const ModalSurvey: React.FC<ModalSurveyProps> = ({ show, onClose, name }) => {
  const [value, setValue] = React.useState<number | null>(0);
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = React.useState({
    kritik_saran: "",
    praktis: false,
    cepat: false,
    informasi: false,
    modern: false,
    pelayanan: false,
    rating: 0 as number,
    nama: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = event.target;

    if (type === "checkbox") {
      const checkboxValue = (event.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checkboxValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const form = new FormData(e.currentTarget);

      const data = {
        kritik_saran: formData.kritik_saran,
        praktis: formData.praktis,
        cepat: formData.cepat,
        informasi: formData.informasi,
        modern: formData.modern,
        pelayanan: formData.modern,
        rating: formData.rating,
        nama: form.get("nama") as string,
      };

      const survey = await postAPI("survey/buat", data);
      if (survey.data.status) {
        setOpen(true);
        onClose();
        console.log(survey.data);
        window.location.href = "/administrasi";
      }
    } catch (err) { }
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input type="hidden" name="nama" value={name} />
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl font-semibold">Survey</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => {
                    onClose(); // Call the callback to notify the parent
                  }}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}

              <div className="px-12">
                <div className="mt-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Beri Rating untuk Website SIPAKAMASETA
                  </label>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      const newRating =
                        typeof newValue === "number" ? newValue : 0;
                      setValue(newValue);
                      setFormData({ ...formData, rating: newRating });
                    }}
                  />
                </div>
                <div className="mt-1">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Apa yang menurut anda oke?
                    </legend>
                    <div className="mt-2 space-y-2">
                      <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="relative flex gap-x-3 md:w-1/2">
                          <div className="flex h-6 items-center">
                            <input
                              name="praktis"
                              checked={formData.praktis}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="praktis"
                              className="font-medium text-gray-900"
                            >
                              Praktis
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3 md:w-1/2">
                          <div className="flex h-6 items-center">
                            <input
                              name="cepat"
                              checked={formData.cepat}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="cepat"
                              className="font-medium text-gray-900"
                            >
                              Cepat
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3 md:w-1/2">
                          <div className="flex h-6 items-center">
                            <input
                              name="informasi"
                              checked={formData.informasi}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="informasi"
                              className="font-medium text-gray-900"
                            >
                              Informasi Berkualitas
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3 md:w-1/2">
                          <div className="flex h-6 items-center">
                            <input
                              name="modern"
                              checked={formData.modern}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="modern"
                              className="font-medium text-gray-900"
                            >
                              Modern
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3 md:w-1/2">
                          <div className="flex h-6 items-center">
                            <input
                              name="pelayanan"
                              type="checkbox"
                              checked={formData.pelayanan}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="pelayanan"
                              className="font-medium text-gray-900"
                            >
                              Pelayanan Berkualitas
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="border-b border-gray-900/10 pb-6 mt-2">
                  <div className="col-span-full">
                    <p className="mt-3 text-sm leading-6 text-black-600">
                      Ada kritik/saran untuk pengembangan Website SIPAKAMASETA?
                    </p>
                    <label
                      htmlFor="kritik"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kritik dan Saran
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="kritik_saran"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    onClose(); // Call the callback to notify the parent
                  }}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalSurvey;
