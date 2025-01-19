// USING LOCAL STORAGE

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Atomis } from "./Atomic";
import { Hello } from "./Atomic";

export default function LocalCounting() {
    const [count, setCount] = useRecoilState(Atomis);
    const[Hydrate, setHydrate] = useRecoilState(Hello)

    useEffect(() => {
        setHydrate(true)
    },[])

    if(!Hydrate){
        return null
    }

    // useEffect(() => {
    //     const localCount = localStorage.getItem("count");
    //     if (localCount) {
    //         setCount(parseInt(localCount));
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("count", count)
    // },[count])

    return (
        <div className="bg-red-300 p-4 rounded">
            <h1 className="text-black">Counting</h1><br/>
            <h2 className="text-black">{count}</h2><br/>
            <div className="flex flex-row gap-6">
            <button className="px-4 bg-blue-500 rounded" onClick={() => setCount(count + 1)}>Increase</button>
            <br></br>
            <button className = "px-4 bg-blue-500 rounded"onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
        </div>
    )
}