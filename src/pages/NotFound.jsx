import { useNavigate } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';

export default function NotFound() {
  let navigate = useNavigate();

  return (
    <div className=' flex items-center justify-center w-screen h-screen bg-gradient-to-b from-gray-200 to-white pt-40"'>
      <div className='px-40 py-20 bg-slate-100 rounded-md shadow-xl'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-9xl'>404</h1>

          <h6 className='mb-2 text-2xl font-bold text-center text-blue-400 md:text-3xl'>
            <span className='text-red-400'>Oops!</span> Page Not Found!
          </h6>

          <p className='mb-8 text-center text-white font-thin md:text-lg'>
            Halaman yang Anda cari tidak ada
          </p>

          <div className='space-y-2'>
            <button
              className='transform hover:scale-110 duration-300 ease-in-out inline-flex gap-4'
              onClick={() => navigate(-1)}
            >
              <ArrowLeftCircle/>
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
