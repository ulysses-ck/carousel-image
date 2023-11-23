'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const imagesFake = [
    {
      src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      width: 500,
      height: 500,
      alt: 'some image of a product 1',
    },
    {
      src: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      width: 500,
      height: 500,
      alt: 'some image of a product 2',
    },
    {
      src: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      width: 500,
      height: 500,
      alt: 'some image of a product 3',
    },
  ];

  const [index, setIndex] = useState(0);

  const handleClickPreviousImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imagesFake.length - 1 : prevIndex - 1
    );
  };

  const handleClickNextImage = () => {
    setIndex((prevIndex) =>
      prevIndex === imagesFake.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-white text-2xl">Image Carousel</h1>

      <ImageContainer
        src={imagesFake[index].src}
        width={imagesFake[index].width}
        height={imagesFake[index].height}
        alt={imagesFake[index].alt}
      />
      <div className="flex gap-2">
        <button onClick={handleClickPreviousImage}>prev</button>
        <span>{index}</span>
        <button onClick={handleClickNextImage}>next</button>
      </div>
    </main>
  );
}

function ImageContainer({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="w-[50px]">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="w-full"
      />
    </div>
  );
}
