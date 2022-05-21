import react from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

import slider1 from "../public/slider/slider1.jpg";
import slider2 from "../public/slider/slider2.jpg";
import slider3 from "../public/slider/slider3.jpg";
import slider4 from "../public/slider/slider4.jpg";

const Slider = () => {
	return (
		<div>
			<div className="bg-[url('../public/slider/slider1.jpg')]" >
				<div className='w-full h-96'>
					{/* <Navbar/> */}
				</div>
			</div>
		</div>
		// <section className="text-gray-600 body-font">
		// 	<div className="container px-5 py-24 mx-auto flex flex-wrap">
		// 		<div className="lg:w-2/3 mx-auto">
		// 			<div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
		// 				<img  alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={slider1} />
		// 				<div className="text-center relative z-10 w-full">
		// 					<h2 className="text-2xl text-black ">Test</h2>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	)
}

export default Slider

