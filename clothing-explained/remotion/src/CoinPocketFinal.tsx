import React from 'react';
import {AbsoluteFill, Audio, OffthreadVideo, Sequence, staticFile} from 'remotion';

// Clothing Explained, video 1: jeans coin pocket, final stitch.
// Remotion is only the stitcher here. The visuals are generated
// low-poly video segments, in order, no cuts, fades, captions, or
// title cards added. Segments: 5s + 10s + 10s + 5s = 30s, 720 frames.
// Audio: the generated segments are muted (their voices drifted
// American to British and went silent for whole seconds). One
// continuous narrator TTS track, one voice, 30.192s at speed 97, plays over
// the full 30s, so someone is talking the entire time, plus a separate
// timed sound-effects track, approved only: Simple Whoosh, clink, click, thunk, snap, no rustle.

export const CoinPocketFinal: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: '#000000'}}>
			<Sequence from={0} durationInFrames={120}>
				<OffthreadVideo volume={0}
					src={staticFile('seg1.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={120} durationInFrames={240}>
				<OffthreadVideo volume={0}
					src={staticFile('seg2.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={360} durationInFrames={240}>
				<OffthreadVideo volume={0}
					src={staticFile('seg3.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={600} durationInFrames={120}>
				<OffthreadVideo volume={0}
					src={staticFile('seg4.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Audio src={staticFile('narration.mp3')} />
			<Audio src={staticFile('sfx.mp3')} volume={1} />
		</AbsoluteFill>
	);
};
