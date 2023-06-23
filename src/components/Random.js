import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

    const [gif, setGif] = useState('');

    

    async function fetchData() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
    }
    useEffect( () => {
        fetchData();
    }, [])
    function clickHandler() {
        fetchData();
    }
    return (
        <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='text-3xl underline uppercase font-bold'>A Random GIF</h1>
            <img src={gif} width="450" />
            <button onClick={clickHandler}
                className='w-10/12 bg-white text-lg py-2 mb-[20px]'>
                Generate
            </button>
        </div>
    )
}

export default Random