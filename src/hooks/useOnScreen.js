import { useState, useEffect } from "react";

export default function useOnScreen(ref) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		// observer.observe(ref.current);
		const intervalId = setInterval(() => {
			const pos = ref?.current?.getBoundingClientRect()?.top;
			if (pos < 800) {
				setIntersecting(true);
			} else {
				setIntersecting(false);
			}
		}, 500);
		return () => clearInterval(intervalId);
	}, []);

	return isIntersecting;
}
