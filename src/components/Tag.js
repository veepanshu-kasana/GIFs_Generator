import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [tag, setTag] = useState('car');
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-2/3 bg-blue-400 rounded-lg border border-slate-800 flex flex-col 
        items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width="550"/>)
        }

        <input className='w-9/12 text-lg py-2 rounded-lg text-center' 
          onChange={(event) => setTag(event.target.value)} value={tag}/>

        <button onClick={() => fetchData(tag)} className='w-9/12 bg-yellow-500 text-lg 
          py-[6px] rounded-lg mb-[20px] font-bold uppercase'>
            Generate
        </button>
    </div>
  )
}

export default Tag;