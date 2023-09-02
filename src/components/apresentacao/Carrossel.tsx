"use client"

import Image from "next/image"
import { useState } from "react"

interface props {
    images: {url: string}[]
}

const Carrossel = ({ images } : props) => {

    const [imageIndex, setImageIndex] = useState(0)

    const nextImage = () => {
        setImageIndex((imageIndex + 1) % images.length)
    }

    const prevImage = () => {
        let index = imageIndex - 1
        if (index == -1) index = images.length - 1
        setImageIndex(index)
    }
    
    return (
        <div className="overflow-hidden relative">
            <div className="flex h-[700px] w-full duration-500">
                <Image 
                    src={images[imageIndex].url} 
                    height={700} 
                    width={1500} 
                    alt="Image" 
                    className="object-cover w-full transition-all"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevImage}>
                    <img src="/images/left-arrow.svg" alt="" height={40} className="bg-yellow-300 p-3 border-[0.3rem] border-black"/>
                </button>

                <button onClick={nextImage}>
                    <img src="/images/right-arrow.svg" alt="" height={40} className="bg-yellow-300 p-3 border-[0.3rem] border-black"/>
                </button>
            </div>
        </div>
    )
}



export default Carrossel