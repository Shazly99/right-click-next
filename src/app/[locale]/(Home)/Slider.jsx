import React from 'react'
import img from '@/constants/img';
import Image from 'next/image';

const Slider = () => {
    return (
        <div>
            <Image
                src={img.slider1} alt="background"
                width={1934} height={951}
                className="w-full h-full"
            />
        </div>
    )
}

export default Slider
