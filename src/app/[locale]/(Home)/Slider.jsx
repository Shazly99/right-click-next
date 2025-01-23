import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import img from '@/constants/img';

const Slider = () => {
    const images = [
        img.slider1,
        img.slider2,
        img.slider3,
     ];

    return (
        <div className="relative ">
            <Carousel fade autoplay>
                {images.map((image, index) => (
                    <div key={index} className="w-full h-50">
                        <Image
                            src={image}
                            alt={`slide-${index}`}
                            width={1000}
                            height={500}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
