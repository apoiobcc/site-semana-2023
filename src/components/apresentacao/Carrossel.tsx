"use client"

import Image from "next/image"
import { useState } from "react"

interface props {
    images: {
        url: string,
        description: string
    }[]
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
        <div className="flex flex-col">
            <div className="flex overflow-hidden relative border-black border-[0.4rem]">
                    <Image 
                        src={images[imageIndex].url} 
                        height={700} 
                        width={1500} 
                        alt="Image" 
                        className="object-cover object-center carousel-image"
                    />
                <div className="absolute inset-0 flex items-center justify-between p-4 group">
                    <button onClick={prevImage} className="carousel-button">
                        <img src="/images/left-arrow.svg" alt="" height={40} className="hidden group-hover:block bg-yellow-300 p-3 border-[0.3rem] border-black cursor-pointer"/>
                    </button>

                    <button onClick={nextImage} className="carousel-button">
                        <img src="/images/right-arrow.svg" alt="" height={40} className="hidden group-hover:block bg-yellow-300 p-3 border-[0.3rem] border-black cursor-pointer"/>
                    </button>
                </div>
            </div>
            <p className="carousel-description">{images[imageIndex].description}</p>
        </div>
    )
}



export default Carrossel