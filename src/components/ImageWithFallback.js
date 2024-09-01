'use client'

import React, { useState } from 'react'
import Image from 'next/image';

export const ImageWithFallback = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            placeholder='empty'
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            onLoad={() => {
                // console.log("Image loaded");
            }}
        />
    );
}
