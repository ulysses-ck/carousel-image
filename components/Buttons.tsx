export default function Buttons({
	imagesFake,
	setIndex,
}: Readonly<{
	index: number;
	setIndex: Function;
	imagesFake: { src: string; width: number; height: number; alt: string }[];
}>) {
	const handleClickPreviousImage = () => {
		setIndex((prevIndex: number) =>
			prevIndex === 0 ? imagesFake.length - 1 : prevIndex - 1
		);
	};

	const handleClickNextImage = () => {
		setIndex((prevIndex: number) =>
			prevIndex === imagesFake.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
			<button
				className="w-full h-full text-left bg-opacity-25 bg-black hover:bg-white hover:bg-opacity-30"
				onClick={handleClickPreviousImage}
			>
				prev
			</button>
			<button
				className="w-full h-full text-right bg-opacity-25 bg-black hover:bg-white hover:bg-opacity-30"
				onClick={handleClickNextImage}
			>
				next
			</button>
		</div>
	);
}
