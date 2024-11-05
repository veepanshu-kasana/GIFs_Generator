import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-2/3 bg-green-400 rounded-lg border border-slate-800 flex flex-col 
        items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
          loading ? (<Spinner/>) : (<img src={gif} width="550"/>)
        }
        <button onClick={() => fetchData()} className='w-9/12 bg-yellow-500 text-lg py-[6px] 
          rounded-lg mb-[20px] font-bold uppercase'>
            Generate
        </button>
    </div>
  )
}

export default Random;