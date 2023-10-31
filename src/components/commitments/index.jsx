import React from "react";

const Commitments = () => {
	return (
		<section className='py-12 bg-[#222627] lg:py-[120px]'>
			<div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:flex-col text-left md:text-center'>
				<p className='mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]'>
					<span>
						At Uni, we’re committed to{" "}
						<span className='bg-gradient-to-r from-[#8fffee] to-[#f9f490] text-transparent bg-clip-text'>
							{" "}
							delivering an unmatched credit experience{" "}
						</span>{" "}
						for millions of Indians.
					</span>
				</p>
				<p className='mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl'>
					On this mission, we’ve partnered with some of the best in the
					business.
				</p>
				<div className='md:mt-24 flex flex-row justify-center flex-wrap'>
					<div className='flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4'>
						<img
							className='w-full h-full'
							src='https://www.uni.cards/images/SBM.svg'
							alt='sbm bank'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Commitments;
