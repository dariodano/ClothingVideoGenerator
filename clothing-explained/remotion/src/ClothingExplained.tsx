import React from 'react';
import {AbsoluteFill, Audio, OffthreadVideo, Sequence, staticFile} from 'remotion';

// Clothing Explained — the one reusable composition. Do NOT make a new
// TSX file per video. Remotion is only the stitcher here. The visuals are
// generated low-poly video segments, in order, no cuts, fades, or title cards.
// Segments: 5s + 10s + 10s + 5s = 30s, 720 frames, 24fps, 720x1280.
// Audio: the generated segments are muted. One continuous narrator TTS track
// plays over the full 30s, plus a separate timed sound-effects track,
// approved only: Simple Whoosh, clink, click, thunk, snap, no rustle.
// Subtitles are NOT added in Remotion. They are burned in after the render
// with ffmpeg drawtext. Position sample 2, middle third upper part, 40% down,
// TikTok Sans Bold, white only, no black outline, 3-4 words per chunk.
//
// Render a video by passing its folder, e.g.:
//   npx remotion render src/index.ts ClothingExplained out/reverse-weave-720p.mp4 --props='{"folder":"reverse-weave"}'
// The folder must contain seg1.mp4, seg2.mp4, seg3.mp4, seg4.mp4,
// narration.mp3, and sfx.mp3 under public/<folder>/.

export type ClothingExplainedProps = {
	folder: string;
	sfxVolume?: number;
};

export const ClothingExplained: React.FC<ClothingExplainedProps> = ({
	folder,
	sfxVolume = 0.5,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#000000'}}>
			<Sequence from={0} durationInFrames={120}>
				<OffthreadVideo
					volume={0}
					src={staticFile(`${folder}/seg1.mp4`)}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={120} durationInFrames={240}>
				<OffthreadVideo
					volume={0}
					src={staticFile(`${folder}/seg2.mp4`)}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={360} durationInFrames={240}>
				<OffthreadVideo
					volume={0}
					src={staticFile(`${folder}/seg3.mp4`)}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={600} durationInFrames={120}>
				<OffthreadVideo
					volume={0}
					src={staticFile(`${folder}/seg4.mp4`)}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Audio src={staticFile(`${folder}/narration.mp3`)} />
			<Audio src={staticFile(`${folder}/sfx.mp3`)} volume={sfxVolume} />
		</AbsoluteFill>
	);
};
