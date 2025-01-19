import axios from 'axios';
import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const axeos = atom({
    key: "axeos",
    default: 0
})

export default function Axios() {
    const [joke, setJoke] = useRecoilState(axeos)
    useEffect(() => {
        const getData = async() => {
            try{
                const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
                setJoke(response.data)
            }catch(error){
                console.log(error);
            }
        }
    getData()
    }, [])

    return(
        <div className="bg-white p-6 rounded-lg max-w-md w-full text-center">
            <h1 className="text-black font-bold underline">AXIOS - JOKE AHEAD</h1>
            <br/>
            <p className="text-xl font-semibold text-black">{joke.joke}</p>
        </div>
    )
}