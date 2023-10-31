import React from "react";

const Paycheck = () => {
	return (
		<>
			<div className='hidden md:block'>
				<button className='bg-[#00000099] py-[11px] px-[30px] flex justify-center items-center cursor-pointer rounded-xl font-primary text-white hover:bg-black hover:text-[#7DEDDD]'>
					Uni Paychek
				</button>
			</div>
			<div className='block md:hidden'>
				<button
					className='w-12 h-12 flex justify-center items-center'
					aria-label='menu'>
					<svg
						width='31'
						height='20'
						viewBox='0 0 31 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect width='31' height='2' fill='white'></rect>
						<rect width='31' height='2' fill='white'></rect>
						<rect width='31' height='2' fill='white'></rect>
						<rect y='9' width='31' height='2' fill='white'></rect>
						<rect y='9' width='31' height='2' fill='white'></rect>
						<rect y='9' width='31' height='2' fill='white'></rect>
						<rect y='18' width='31' height='2' fill='white'></rect>
						<rect y='18' width='31' height='2' fill='white'></rect>
						<rect y='18' width='31' height='2' fill='white'></rect>
					</svg>
				</button>
			</div>
		</>
	);
};

export default Paycheck;
