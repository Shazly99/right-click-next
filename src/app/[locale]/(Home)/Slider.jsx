import React from 'react';
import img from '@/constants/img';
import Image from 'next/image';

const Slider = () => {
    return (
        <div>
            <Image
                src={img.slider1}
                alt="background"
                width={1000}
                height={500}
                placeholder="blur"
                blurDataURL="/path-to-blur-image"
                className="w-full h-full"
                priority
            />

        </div>
    );
};

export default Slider;
