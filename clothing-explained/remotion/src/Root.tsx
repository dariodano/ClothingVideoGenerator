import React from 'react';
import {Composition} from 'remotion';
import {CoinPocket} from './CoinPocket';
import {CoinPocketFinal} from './CoinPocketFinal';
import {BlankTabFinal} from './BlankTabFinal';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="CoinPocket"
				component={CoinPocket}
				durationInFrames={720}
				fps={24}
				width={720}
				height={1280}
			/>
			<Composition
				id="CoinPocketFinal"
				component={CoinPocketFinal}
				durationInFrames={720}
				fps={24}
				width={720}
				height={1280}
			/>
			<Composition
				id="BlankTabFinal"
				component={BlankTabFinal}
				durationInFrames={720}
				fps={24}
				width={720}
				height={1280}
			/>
		</>
	);
};
