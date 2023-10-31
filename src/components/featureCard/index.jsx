import React from "react";

const FeatureCard = () => {
	return (
		<section className='lg:py-[100px] bg-black py-8 relative'>
			<img
				src='https://www.uni.cards/images/circles.png'
				alt='circles'
				className='absolute top-0 h-auto w-[70%]'
			/>
			<div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6'>
				<div className='mx-auto w-full flex-[50%] flex-grow-0 my-auto'>
					<p className='text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]'>
						We’ve all heard of instant groceries, now say hello to
						<span className='bg-gradient-to-r from-[#8fffee] to-[#f9f490] text-transparent bg-clip-text'>
							<br /> instant credit.
						</span>
					</p>
					<p className='text-[#BFC9CC] text-[14px] md:text-2xl'>
						0% hassle, 100% paperless. Get your <br /> Uni Card instantly.
					</p>
				</div>
				<div className='m-auto w-full md:w-[450px] h-auto md:flex-[50%]'>
					<img
						src='https://www.uni.cards/images/nx-wave/app_screen_1.webp'
						alt=''
						loading='lazy'
						className='m-auto w-[80%] h-auto css-1e2fy0l'
					/>
				</div>
			</div>
			<div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6'>
				<div className='mx-auto w-full flex-[50%] flex-grow-0 my-auto'>
					<p className='text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]'>
						With Uni,{" "}
						<span className='bg-gradient-to-r from-[#8fffee] to-[#f9f490] text-transparent bg-clip-text'>
							<br />
							you’re always in control.
						</span>
					</p>
					<p className='text-[#BFC9CC] text-[14px] md:text-2xl'>
						Set your own payment limits. Choose how and where you spend. Lock
						and unlock your card. All right from the app.{" "}
					</p>
				</div>
				<div className='m-auto w-full md:w-[450px] h-auto md:flex-[50%]'>
					<img
						src='https://www.uni.cards/images/nx-wave/app_screen_2.webp'
						alt=''
						loading='lazy'
						className='m-auto w-[80%] h-auto css-1e2fy0l'
					/>
				</div>
			</div>

			{/* Footer for the section */}

			<section className='py-12 lg:py-[100px] bg-black'>
				<div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-between'>
					<div className='flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0'>
						<div className='flex-[50%] flex-shrink-0 flex w-full'>
							<div className='w-full h-36 relative'>
								<img
									className='absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0'
									src='https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp'
									alt=''
								/>
							</div>
						</div>
						<div className='flex-[50%] flex flex-col'>
							<p className='font-medium text-base text-white leading-[18px] md:text-2xl'>
								Help, just a WhatsApp away. Anytime, Anyday.
							</p>
							<p className='text-sm text-gray-4 mt-2 md:text-lg'>
								<span>
									During hectic work hours. On lazy sunday mornings. In the
									thick of night. Anytime.
								</span>
							</p>
						</div>
					</div>
					<div className='flex flex-row-reverse w-full items-center md:flex-col md:max-w-xs my-12 md:my-0'>
						<div className='flex-[50%] flex-shrink-0 flex w-full'>
							<div className='w-full h-36 relative'>
								<img
									className='absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0'
									src='https://www.uni.cards/images/nx-wave/rupee_bubble.webp'
									alt=''
								/>
							</div>
						</div>
						<div className='flex-[50%] flex flex-col'>
							<p className='font-medium text-base text-white leading-[18px] md:text-2xl'>
								{" "}
								No hidden charges, no last minute surprises.
							</p>
							<p className='text-sm text-gray-4 mt-2 md:text-lg'>
								<span>
									100% money back guarantee if a charge is applied without your
									knowledge.
								</span>
							</p>
						</div>
					</div>
					<div className='flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0'>
						<div className='flex-[50%] flex-shrink-0 flex w-full'>
							<div className='w-full h-36 relative'>
								<img
									className='absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0'
									src='https://www.uni.cards/images/nx-wave/antivirus_bubble.webp'
									alt=''
								/>
							</div>
						</div>
						<div className='flex-[50%] flex flex-col'>
							<p className='font-medium text-base text-white leading-[18px] md:text-2xl'>
								{" "}
								Super secure. Because we care about your money.
							</p>
							<p className='text-sm text-gray-4 mt-2 md:text-lg'>
								<span>
									<img
										style={{ marginTop: "24px" }}
										src='https://www.uni.cards/images/pcidss_cert.svg'
										alt='PCI Logo'
									/>
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Footer for the section end */}
		</section>
	);
};

export default FeatureCard;
