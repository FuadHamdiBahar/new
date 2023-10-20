'use client'
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from 'next/navigation';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as React from 'react';
import {PatternFormat} from 'react-number-format';
import { redirect } from 'next/navigation';
// import AlertDialogSlide from './dialog';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export default function InputItem(){
    const  router = useRouter()
    function execute() {
        handleClick()
        redirect('/')

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

    return(
        <div>
             <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3  md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Nama Pemilik Tanah
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="namepemilik" type="text" placeholder="Muh. Gibran" required/>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Alamat Tanah
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="alamattanah" type="text" required />
          </div>
        </div> 

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3  md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Luas Tanah
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="luastanah" type="text" required />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3  md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Luas Bangunan
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="luasbangunan" type="text" required />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Dusun
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="dusun" type="text" required/>
          </div>
        </div>     

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Nomor Sertifikat Tanah
            </label>
            <PatternFormat
            name='nosertiftanah'
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            format='################'
            required/>

            {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="nowa" type="text"/> */}
            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
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