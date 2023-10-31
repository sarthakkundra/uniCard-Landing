import React, { useState, useEffect } from "react";
import Cross from "../cross";
import Tick from "../tick";
import { validatePhoneNum } from "../utils";

const MobilePhoneNumberInput = () => {
	const [shouldShowPhoneInput, setShouldShowPhoneInput] = useState(false);
	const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [consentForWhatsapp, setConsentForWhatsapp] = useState(false);
	const [ctaString, setCtaString] = useState("Apply now");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (phoneNumber.length) {
			setIsPhoneNumberValid(validatePhoneNum(phoneNumber));
		}
	}, [phoneNumber]);

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				setIsLoading(false);
				setShouldShowPhoneInput(false);
				setCtaString("Download");
			}, 2000);
		}
	}, [isLoading]);

	const handlePhoneNoSubmit = () => {
		setIsLoading(true);
	};

	return (
		<div
			className='w-full bottom-0 z-40 fixed md:hidden py-8'
			style={{
				background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%)`,
			}}>
			<div className='w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium'>
				<div className='flex flex-col transition-all ease-in'>
					{/* pop up */}

					{shouldShowPhoneInput && (
						<div
							className={`bg-[#192231] border border-[#fdef78] rounded-t-xl ${
								shouldShowPhoneInput ? "animate-popUp" : ""
							}`}
							style={
								shouldShowPhoneInput ? { transform: "translateY(-90px)" } : {}
							}>
							<div class='flex items-center'>
								<input
									id='phone'
									className='bg-[#192231] text-[#fdef78] pt-2 px-[18px] pb-4 font-medium w-full text-lg border-0 outline-none rounded-tr-xl rounded-tl-xl py-3'
									placeholder='Enter your phone number'
									autocomplete='off'
									onChange={(e) => setPhoneNumber(e.target.value)}
									value={phoneNumber}
								/>
								{phoneNumber && (
									<>
										{isPhoneNumberValid ? (
											<Tick />
										) : (
											<Cross
												onClick={() => {
													setShouldShowPhoneInput(false);
													setPhoneNumber("");
												}}
											/>
										)}
									</>
								)}
								<span className='w-6'></span>
							</div>
						</div>
					)}

					{/* pop up end */}
					<button
						className={`p-4 rounded-lg z-10 flex items-center bg-[#FDEF78] text-black mb-6 disabled:bg-[#AEAB8C] absolute w-[90%] font-primary ${
							shouldShowPhoneInput
								? "bottom-[40%]"
								: ctaString?.toLowerCase()?.includes("apply")
								? "bottom-0"
								: "bottom-10"
						}
						} ${
							ctaString?.toLowerCase()?.includes("apply")
								? "justify-between"
								: "justify-center"
						}`}
						disabled={
							phoneNumber && shouldShowPhoneInput && !isPhoneNumberValid
						}
						onClick={() => {
							if (isPhoneNumberValid) {
								handlePhoneNoSubmit();
							} else {
								setShouldShowPhoneInput((s) => !s);
							}
						}}>
						{isLoading && (
							<div className='animate-spin items-center justify-center rounded-full w-4 h-4 bg-gradient-to-r from-[#8fffee] to-[#f9f490]'>
								<div className='h-2 w-2 rounded-full bg-[#FDEF78]'></div>
							</div>
						)}
						<span>{ctaString}</span>
						{ctaString?.toLowerCase()?.includes("apply") && (
							<img
								src='https://www.uni.cards/images/right_arrow.svg'
								className='inline ml-3 css-0'
							/>
						)}
					</button>
				</div>
			</div>
			{/* disclaimer */}

			{shouldShowPhoneInput && (
				<div className='absolute bottom-[10%] left-[5%] flex items-center py-4 px-2 max-w-xs font-primary'>
					<input
						type='checkbox'
						id='consent-msg'
						checked={consentForWhatsapp}
						onClick={() => setConsentForWhatsapp((s) => !s)}
						className='mr-2'
					/>
					<label
						for='consent-msg'
						className='consent text-white md:text-black text-[10px] leading-3 cursor-pointer'>
						You agree to be contacted by Uni Cards over Call, SMS, Email or
						WhatsApp to guide you through your application.
					</label>
				</div>
			)}
			{ctaString?.toLowerCase()?.includes("download") && (
				<div className='absolute bottom-0 left-[5%] flex items-center py-4 px-2 max-w-xs font-primary'>
					<p className='text-white md:text-black text-[10px] leading-3'>
						Thank you for your interest in the Uni Card.
						<br />
						Download the Uni Cards app now and get your Uni Card in minutes.
					</p>
				</div>
			)}

			{/* disclaimer end */}
		</div>
	);
};

export default MobilePhoneNumberInput;
