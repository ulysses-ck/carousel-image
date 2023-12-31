import Image from "next/image";
export default function ImageContainer({
	src,
	alt,
	width,
	height,
}: Readonly<{
	src: string;
	alt: string;
	width: number;
	height: number;
}>) {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Image
				src={src}
				width={width}
				height={height}
				alt={alt}
				className="w-full"
				priority
			/>
		</div>
	);
}
