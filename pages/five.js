// react icons

import {MdAddToQueue, MdAndroid,MdCake } from 'react-icons/md'

export default function IKUNS() {
    return(
        <div className='flex flex-col items-center'>
            <h1>React Icons:</h1>    
            <div className='flex flex-row items-center'>
                <p><MdAddToQueue /></p>
                <p><MdAndroid /></p>
                <p><MdCake /></p>
            </div>
        </div>
    )
}