import React from "react";

const SecurityStandards = () => {
	return (
		<div className='flex items-center justify-center p-4 text-grey-dark bg-[#222222] text-[#737379]'>
			<p>Uni maintains the highest level of security standards</p>
			<img
				src='https://www.uni.cards/images/pcidss_cert.svg'
				className='ml-3 w-20 css-0'
				width='80px'
				loading='lazy'
				alt=''
			/>
		</div>
	);
};

export default SecurityStandards;
