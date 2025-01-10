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
                className="w-full h-full"
                priority // Ensure it's above-the-fold
                placeholder="blur" // Use a blurred placeholder
                blurDataURL="/path-to-blur-image" // Replace with a base64-encoded low-res image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                format="webp" // Serve optimized format
            />
        </div>
    );
};

export default Slider;
