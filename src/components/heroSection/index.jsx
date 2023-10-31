import React, { useState } from "react";
import DesktopPhoneNumberInput from "../phoneNumberInput/desktop";
import { UNIQUE_SELLING_PONTS } from "./constants";

const renderUSPs = () => {
	return (
		<p className='font-medium text-sm md:text-base md:mb-9 font-primary'>
			{UNIQUE_SELLING_PONTS.map((point, index) => (
				<>
					{point}
					{index < UNIQUE_SELLING_PONTS.length - 1 && (
						<svg
							className='mx-[8px] mb-[2px] inline leading-5'
							width='12'
							height='12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z'
								fill='#000'
								className='mix-blend-darken'></path>
						</svg>
					)}
				</>
			))}
		</p>
	);
};

const HeroSection = () => {
	const [isWhatsappAllowed, setIsWhatsappAllowed] = useState(false);

	return (
		<section className='flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent'>
			<img
				src='https://www.uni.cards/images/nx-wave/nx_wave_hero.png'
				className='h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6'
			/>
			<div className='z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6'>
				<h1 className='font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6  font-primary'>
					<span>
						<strong>NX Wave.</strong> The next-gen credit card for those who
						love rewards.
					</span>
				</h1>
				<div className='mt-4 md:mt-0'>{renderUSPs()}</div>
				<div className='hidden md:block'>
					<DesktopPhoneNumberInput />
					<div className='consent flex items-center py-4 px-2 max-w-xs'>
						<input
							type='checkbox'
							checked={isWhatsappAllowed}
							onChange={() => setIsWhatsappAllowed((s) => !s)}
							id='whatsapp-allow'
							className='mr-2 cursor-pointer'></input>
						<label
							for='whatsapp-allow'
							className='consent text-white md:text-black text-[10px] leading-3 cursor-pointer'>
							You agree to be contacted by Uni Cards over Call, SMS, Email or
							WhatsApp to guide you through your application.
						</label>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
