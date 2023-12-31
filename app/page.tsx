"use client";

import { useState } from "react";
import ImageContainer from "@/components/ImageContainer";
import Buttons from "@/components/Buttons";

export default function Home() {
	const imagesFake = [
		{
			src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			width: 600,
			height: 900,
			alt: "some image of a product 1",
		},
		{
			src: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
			width: 600,
			height: 900,
			alt: "some image of a product 2",
		},
		{
			src: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
			width: 600,
			height: 900,
			alt: "some image of a product 3",
		},
	];

	const [index, setIndex] = useState(0);

	return (
		<main className="flex flex-col justify-center items-center h-screen">
			<div className="w-[300px] h-[450px] self-center justify-self-center relative">
				<ImageContainer
					src={imagesFake[index].src}
					width={imagesFake[index].width}
					height={imagesFake[index].height}
					alt={imagesFake[index].alt}
				/>
				<Buttons
					imagesFake={imagesFake}
					index={index}
					setIndex={setIndex}
				/>
			</div>
      <span>{index}</span>
		</main>
	);
}
