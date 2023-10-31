import React, { useState, useEffect } from "react";
import TermsAndCondn from "../../termsAndCondn";
import { validatePhoneNum } from "../utils";

const DesktopPhoneNumberInput = ({ isSticky }) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [ctaString, setCtaString] = useState("Apply now");

	useEffect(() => {
		if (phoneNumber.length) {
			setIsPhoneNumberValid(validatePhoneNum(phoneNumber));
		}
	}, [phoneNumber]);

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				setIsLoading(false);
				// setShouldShowPhoneInput(false);
				setCtaString("Download");
			}, 2000);
		}
	}, [isLoading]);

	const handlePhoneNoSubmit = () => {
		setIsLoading(true);
	};

	const renderDesktopPhoneInput = () => {
		return (
			<div className='flex bg-black p-1 pl-2 rounded-xl justify-between w-fit'>
				<div className='flex items-center'>
					<input
						className='bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44'
						placeholder='Enter Phone Number'
						type='tel'
						onChange={(e) => setPhoneNumber(e.target.value)}
						value={phoneNumber}></input>
					<span className='w-6 flex items-center justify-end h-full'></span>
					<button
						onClick={() => {
							if (isPhoneNumberValid) {
								handlePhoneNoSubmit();
							} else {
							}
						}}
						className='text-center bg-[#FDEE78] text-sm leading-7 justify-between pt-2 ml-2 rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed flex items-center'>
						{isLoading && (
							<div className='animate-spin items-center justify-center rounded-full w-4 h-4 bg-gradient-to-r from-[#8fffee] to-[#f9f490] mr-2'>
								<div className='h-2 w-2 rounded-full bg-[#FDEF78]'></div>
							</div>
						)}

						<span>{ctaString}</span>
					</button>
				</div>
			</div>
		);
	};

	return (
		<>
			{isSticky ? (
				<>
					<section className='hidden sm:block fixed bottom-0 w-screen bg-[#f5f5f5] py-5 z-10'>
						<div className='mx-auto max-w-7xl px-12 w-full flex justify-between'>
							{renderDesktopPhoneInput()}
							<TermsAndCondn />
						</div>
					</section>
				</>
			) : (
				<>{renderDesktopPhoneInput()}</>
			)}
		</>
	);
};

export default DesktopPhoneNumberInput;
