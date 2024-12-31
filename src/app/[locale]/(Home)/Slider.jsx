import React from 'react'
import img from '@/constants/img';
import Image from 'next/image';

const Slider = () => {
    return (
        <div>
            <Image
                src={img.slider1}
                alt="background"
                width={1934}
                height={951}
                className="w-full h-full"
                priority
                format="webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1934px"
                placeholder="blur"
            />
        </div>
    )
}

export default Slider
