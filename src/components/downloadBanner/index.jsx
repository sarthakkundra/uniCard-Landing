import React from "react";

const DownloadBanner = () => {
	return (
		<section className='py-12 bg-gradient-to-r from-[#8fffee] to-[#f9f490] lg:py-[100px] bg-cover download-bg font-primary'>
			<div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-around items-center my-4'>
				<p className='mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight w-3/4 md:w-1/2'>
					Download now to get started
				</p>
				<div className='flex'>
					<a
						href='https://unicards.onelink.me/KRuW/'
						className='w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black google-btn-2 flex justify-between items-center py-1 px-4 md:py-2 md:px-8'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/1077/1077105.png'
							className='w-2 md:w-6'
						/>
						Google Play
					</a>
					<a
						href='https://uni-growth.onelink.me/v6cm/'
						className='w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black flex justify-between items-center py-1 px-4 md:y-2 md:px-8'>
						<img src='../../public/icons/apple-logo.png' />
						App Store
					</a>
				</div>
			</div>
		</section>
	);
};

export default DownloadBanner;
