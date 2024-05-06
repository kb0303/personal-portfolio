import React, { useState, useEffect } from 'react';
import '../../src/assets/Styles/CustomCircularProgressBar.css';

const CustomCircularProgressBar = ({ percentage }) => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const progressOffset = (100 - percentage) / 100 * 439.82297; // Calculated circumference for radius 70
		setOffset(0); // Set initial offset to 0

		// Use setInterval to gradually increase the offset in an animated way
		const intervalId = setInterval(() => {
			setOffset((prevOffset) => {
				const step = 1; // You can adjust the step value to control the animation speed
				const newOffset = prevOffset + step;

				// Stop the animation when reaching the final offset
				if (newOffset >= progressOffset) {
					clearInterval(intervalId);
					return progressOffset;
				}

				return newOffset;
			});
		}, 10); // You can adjust the interval duration to control the animation smoothness

		return () => clearInterval(intervalId); // Cleanup interval on component unmount

	}, [percentage]);

	return (
		<svg className="custom-progress-bar" width="140" height="140">
			<circle className="progress-bar-background" cx="70" cy="70" r="70" />
			<circle
				className="progress-bar"
				cx="70"
				cy="70"
				r="70"
				strokeDasharray="439.82297"
				strokeDashoffset={offset}
			/>
			<text className="progress-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
				{percentage}%
			</text>
		</svg>
	);
};

export default CustomCircularProgressBar;
