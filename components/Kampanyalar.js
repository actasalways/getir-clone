import React from 'react';
import Image from 'next/image';

import kampanya1 from "../public/kampanyalar/kampanya-1.jpeg";
import kampanya2 from "../public/kampanyalar/kampanya-2.jpeg";

const Kampanyalar = (props) => {
    return (
        <div className='p-4  '>
            <span className="text-black opacity-70 font-bold text-2xl ">Kampanyalar</span>
            <div className=' h-200 grid grid-flow-col'>
                <div className='m-2 p-4 '>
                    <Image src={kampanya1} alt="kampanya1"  className='rounded-2xl'/>
                </div>
                <div className='m-2 p-4 '>
                    <Image src={kampanya2} alt="kampanya2" className='rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default Kampanyalar;
