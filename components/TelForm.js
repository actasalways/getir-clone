import React from 'react'
import Image from 'next/image'
import Flags from "country-flag-icons/react/3x2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const TelForm = () => {
	return (
		<div className='p-5'>
			<section class="text-gray-600 body-font overflow-hidden">
				<div class="container px-5 py-24 mx-auto">
					<div class="lg:w-4/5 mx-auto flex flex-wrap">
						<div class="flex ml-6 items-center">

						</div>
					</div>
				</div>
			</section>

			<div class="fixed">
				<span class="absolute left-0 top-0 h-full w-10  text-gray-600 pointer-events-none flex items-center justify-start">
					<Flags.TR title="tr" className="ml-2 w-4 h-4 " />
				</span>
				<select class="rounded border appearance-none border-gray-300 py-2 
						focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 justify-center">
					<option>
						SM
					</option>
					<option>M</option>
					<option>L</option>
					<option>XL</option>
				</select>
				<span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
					<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
						<path d="M6 9l6 6 6-6"></path>
					</svg>
				</span>
			</div>

		</div>
	)
}

export default TelForm