import React from 'react';
import {Composition} from 'remotion';
import {ClothingExplained} from './ClothingExplained';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="ClothingExplained"
				component={ClothingExplained}
				durationInFrames={720}
				fps={24}
				width={720}
				height={1280}
				defaultProps={{
					folder: 'nike-air',
					sfxVolume: 0.5,
				}}
			/>
		</>
	);
};
