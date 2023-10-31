export const validatePhoneNum = (phoneNo) => {
	const indianMobileNumberRegExp = /^(0|91)?[6-9][0-9]{9}$/;
	return indianMobileNumberRegExp.test(phoneNo);
};
