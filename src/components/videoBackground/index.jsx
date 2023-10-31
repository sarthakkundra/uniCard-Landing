import React from "react";

const VideoBackground = () => {
	return (
		<video
			playsInline
			autoPlay
			muted
			loop
			poster='polina.jpg'
			id='bgvid'
			className='absolute object-cover w-screen h-[100vh] top-0 left-0'>
			<source
				src='https://www.uni.cards/videos/nxt_wave_bg.mp4'
				type='video/mp4'
			/>
		</video>
	);
};

export default VideoBackground;
