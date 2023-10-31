import React, { useState } from "react";

const TermsAndCondn = () => {
	const [isWhatsappAllowed, setIsWhatsappAllowed] = useState(false);

	return (
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
				You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp
				to guide you through your application.
			</label>
		</div>
	);
};

export default TermsAndCondn;
