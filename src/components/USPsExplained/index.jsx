import React, { useRef, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import DesktopPhoneNumberInput from "../phoneNumberInput/desktop";

const USPsExplained = () => {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref);

	useEffect(() => {
		console.log("ISVISIBLE ", isVisible);
	}, [isVisible]);

	return (
		<>
			<div className='py-12 md:py-[150px]'>
				<section>
					<div className='w-full max-w-7xl mx-auto px-6 md:px-4'>
						<div className='flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium font-primary text-black'>
							<p>
								Earn 1% assured cashback{" "}
								<span className='text-[#9ea7ae]'>on your spends. Get</span> 5X
							</p>
							<p>
								more value than cashback{" "}
								<span className='text-[#9ea7ae]'> at the Uni Store. Enjoy</span>
							</p>
							<p>
								<span className='text-[#9EA7AE]'>round the clock </span>
								Whatsapp support.{" "}
								<span className='text-[#9EA7AE]'>And it's</span>
							</p>
							<p>
								lifetime free
								<span className='text-[#9EA7AE]'>
									; no joining fee, no annual charges.
								</span>
							</p>
						</div>
						<div className='flex md:justify-center py-12' ref={ref}>
							<div
								className='flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center'
								style={{
									background:
										"linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
								}}>
								<img
									className='w-9 md:w-14 css-0'
									src='https://www.uni.cards/images/down_arrow.svg'
								/>
							</div>
						</div>

						{/* USP1 */}

						<div className='flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8 font-primary'>
							<div className='flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]'>
								<div className='w-full md:w-[300px] lg:w-[510px]'>
									<div>
										<span style={{ fontWeight: "700" }}>
											1% assured cashback on your spends.
										</span>
										<span style={{ fontWeight: "400", color: "#9EA7AE" }}>
											The more you spend, the more you earn.
										</span>
									</div>
								</div>
								<div className='info-caption'>
									<div className='leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]'>
										Not applicable on fuel purchase, rent &amp; wallet
										transfers, ATM withdrawals &amp; international transactions.
									</div>
								</div>
							</div>
							<div className='w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]'>
								<div className='flex justify-center overflow-hidden'>
									<div className='relative w-[280px] lg:w-[448px]'>
										<img
											src='https://www.uni.cards/images/one_percent_cashback.png'
											className=''
										/>
									</div>
								</div>
							</div>
						</div>
						{/* USP1 end*/}

						{/* USP 2 */}
						<div className='flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8'>
							<div className='flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]'>
								<div className='w-full md:w-[300px] lg:w-[510px]'>
									<div>
										<span style={{ fontWeight: "700" }}>
											5x more value than your cashback,
										</span>
										<span style={{ fontWeight: "400", color: "#9EA7AE" }}>
											{" "}
											only at the Uni Store.
										</span>
									</div>
								</div>
							</div>
							<div className='w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]'>
								<div className='flex justify-center overflow-hidden'>
									<div className='relative w-[280px] lg:w-[448px]'>
										<img
											src='https://www.uni.cards/images/five_x_rewards.png'
											className=''
										/>
									</div>
								</div>
							</div>
						</div>
						{/* USP 2 end*/}

						{/* USP 3 */}

						<div className='flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8'>
							<div className='flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]'>
								<div className='w-full md:w-[300px] lg:w-[510px]'>
									<div>
										<span style={{ fontWeight: "700" }}>
											Zero Forex Markup.
										</span>
										<br />
										<span style={{ fontWeight: "400", color: "#9EA7AE" }}>
											{" "}
											Go international, without any fees.
										</span>
									</div>
								</div>
							</div>
							<div className='w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]'>
								<div className='flex justify-center overflow-hidden'>
									<div className='relative w-[280px] lg:w-[448px]'>
										<img
											src='https://www.uni.cards/images/forex_globe.png'
											className=''
										/>
									</div>
								</div>
							</div>
						</div>
						{/* USP 3 ends */}

						{/* Final Section*/}
						<div className='flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center'>
							<p>
								Lifetime <span className='text-[#5BD6C4]'>free. </span>
								<span className='block sm:inline-block md:text-center'>
									No joining fee.
								</span>
								<span className='block md:text-center'>
									{" "}
									No annual charges.{" "}
								</span>
							</p>
						</div>
						{/* Final Section ends */}
					</div>
				</section>
			</div>
			<DesktopPhoneNumberInput isSticky={isVisible} />
		</>
	);
};

export default USPsExplained;
