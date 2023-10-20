"use client";
import Snackbar from "@mui/material/Snackbar";
import { useRouter } from "next/navigation";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import * as React from "react";
import { PatternFormat } from "react-number-format";
// import AlertDialogSlide from './dialog';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function InputItem() {
  const router = useRouter();
  function execute() {
    // handleClick()
    // router.push('/')
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3  md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nama Lengkap
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="name"
            type="text"
            placeholder="Muh. Gibran"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            No.HP
          </label>
          <PatternFormat
            name="nohp"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            format="############"
          />
        </div>
      </div>


      <button type="submit" className="bg-blue-500 rounded-lg text-white p-3">
        Submit
      </button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data anda telah diupload! silahkan Tunggu 2x24jam
        </Alert>
      </Snackbar>
    </div>
  );
}
