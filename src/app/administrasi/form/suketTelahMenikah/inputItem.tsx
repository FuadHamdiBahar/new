'use client'
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from 'next/navigation';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as React from 'react';
import { PatternFormat } from 'react-number-format';
// import AlertDialogSlide from './dialog';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function InputItem() {
  const router = useRouter()
  function execute() {
    handleClick()
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <h1 className='mx-auto pb-4 text-center font-bold text-xl'>Pihak Pria</h1>
        <div className="w-full px-3  md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Nama Lengkap
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="namepria" type="text" placeholder="Muh. Gibran" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3  md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Nomor Hp
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="nohppria" type="text" placeholder="Muh. Gibran" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='tgl' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Tempat Lahir
              </label>
              <input name='tempatlahirpria' type="text" className='appearance-none block w-full p-4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
            </div>
            <div className='flex flex-col'>

              <label htmlFor='tgl' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Tanggal Lahir
              </label>
              <PatternFormat
                format='##/##/####'
                name='tglpria'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              ></PatternFormat>
              <span className='text-gray-500 text-sm'>Format: Tanggal/Bulan/Tahun (01/01/2000)</span>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Alamat
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="alamatpria" type="text" placeholder="contoh: Jl. Melati no. 4" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Agama
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="agamapria" type="text" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Pekerjaan
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="workpria" type="text" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <h1 className='mx-auto pb-4 text-center font-bold text-xl'>Pihak Wanita</h1>
        <div className="w-full px-3  md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Nama Lengkap
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="namewanita" type="text" placeholder="Muh. Gibran" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3  md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Nomor Hp
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="nohpwanita" type="text" placeholder="Muh. Gibran" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='tgl' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Tempat Lahir
              </label>
              <input name='tempatlahirwanita' type="text" className='appearance-none block w-full p-4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
            </div>
            <div className='flex flex-col'>

              <label htmlFor='tgl' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Tanggal Lahir
              </label>
              <PatternFormat
                format='##/##/####'
                name='tglwanita'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              ></PatternFormat>
              <span className='text-gray-500 text-sm'>Format: Tanggal/Bulan/Tahun (01/01/2000)</span>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Alamat
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="alamatwanita" type="text" placeholder="contoh: Jl. Melati no. 4" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Agama
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="agamawanita" type="text" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Pekerjaan
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="workwanita" type="text" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='tgl' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Tempat Nikah
              </label>
              <input name='lokasinikah' type="text" className='appearance-none block w-full p-4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
            </div>
            <div className='flex flex-col'>

              <label htmlFor='tgl' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Tanggal Nikah
              </label>
              <PatternFormat
                format='##/##/####'
                name='tglnikah'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              ></PatternFormat>
              <span className='text-gray-500 text-sm'>Format: Tanggal/Bulan/Tahun (01/01/2000)</span>
            </div>
          </div>

        </div>
      </div>
      <button onClick={execute} type="submit" className="bg-blue-500 rounded-lg text-white p-3">Submit</button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Data anda telah diupload! silahkan Tunggu 2x24jam
        </Alert>
      </Snackbar>
    </div>
  )
}