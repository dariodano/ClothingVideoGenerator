import React from 'react';
import {AbsoluteFill, Audio, OffthreadVideo, Sequence, staticFile} from 'remotion';

// Clothing Explained, video 2: Levi's blank red tab, final stitch.
// Remotion is only the stitcher here. The visuals are generated
// low-poly video segments, in order, no cuts, fades, or title cards.
// Segments: 5s + 10s + 10s + 5s = 30s, 720 frames.
// Audio: the generated segments are muted. One continuous narrator
// TTS track, Helio voice avocado_v2:MAI_03, speed 100, 91 words,
// 30.528s, plays over the full 30s, plus a separate timed
// sound-effects track, approved only: Simple Whoosh, clink, click,
// thunk, snap, no rustle, volume 1.
// Subtitles are NOT added in Remotion. They are burned in after
// the render with ffmpeg drawtext, see
// ~/workspace/clothing-explained/subtitle-burn-blank-tab.sh
// Position sample 2, middle third upper part, 40% down,
// TikTok Sans Bold, white only, no black outline, 3-4 words per chunk.
// Segments blank-tab/seg1.mp4 to seg4.mp4 were NOT yet generated
// when this composition was written: the hero image generation
// was denied, see the parent report. Do not render this composition
// until those four segment files exist in public/blank-tab/.

export const BlankTabFinal: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: '#000000'}}>
			<Sequence from={0} durationInFrames={120}>
				<OffthreadVideo volume={0}
					src={staticFile('blank-tab/seg1.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={120} durationInFrames={240}>
				<OffthreadVideo volume={0}
					src={staticFile('blank-tab/seg2.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={360} durationInFrames={240}>
				<OffthreadVideo volume={0}
					src={staticFile('blank-tab/seg3.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Sequence from={600} durationInFrames={120}>
				<OffthreadVideo volume={0}
					src={staticFile('blank-tab/seg4.mp4')}
					style={{width: 720, height: 1280, objectFit: 'cover'}}
				/>
			</Sequence>
			<Audio src={staticFile('blank-tab/narration.mp3')} />
			<Audio src={staticFile('blank-tab/sfx.mp3')} volume={1} />
		</AbsoluteFill>
	);
};
