import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

// Clothing Explained, video 1: jeans coin pocket.
// 30 seconds, 720 frames at 24 fps, 720x1280, one continuous shot.
// No cuts, no fades, no captions, no title cards. Silent visual draft:
// narration and sound effects are separate tracks, scripted in narration.md.
// Master style: low-poly faceted shapes, matte solid colours, one pivot
// dead centre (360, 640), camera orbiting continuously, something always moving.

export const CoinPocket: React.FC = () => {
	const frame = useCurrentFrame();

	// Camera: continuous orbit around the centre pivot, rising and dipping.
	// Linear rotation plus a sine dip, so it never stops or holds.
	const orbit = interpolate(frame, [0, 720], [-9, 9]);
	const dip = 18 * Math.sin((frame / 720) * Math.PI * 4);
	const zoom = 1.04 + 0.03 * Math.sin((frame / 720) * Math.PI * 2);

	// Tiny pocket: lifts off and floats 0-5s, hovers, snaps back 25-29s.
	const pocketLift = interpolate(frame, [0, 120, 600, 690, 720], [0, -150, -150, 0, -12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const pocketBob = 10 * Math.sin((frame / 24) * Math.PI * 2);
	const pocketRot = interpolate(frame, [0, 120, 600, 690], [0, -10, -10, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Pocket watch: slides in 5-15s, settles snug in the pocket, stays put.
	const watchX = interpolate(frame, [120, 360], [230, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const watchY = interpolate(frame, [120, 360], [260, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const watchSwing = 4 * Math.sin((frame / 24) * Math.PI * 2);

	// Tools and dust in the main pocket, 15-25s: grow into place inside
	// the pocket (scale, not a fade), then drift.
	const toolsScale = interpolate(frame, [360, 480], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const dustDrift = 14 * Math.sin((frame / 24) * Math.PI);

	// Whole object slowly spins and floats when nothing is demonstrated.
	const floatY = 12 * Math.sin((frame / 720) * Math.PI * 4);
	const spin = interpolate(frame, [0, 720], [-2, 2]);

	return (
		<AbsoluteFill style={{backgroundColor: '#e8ddc8'}}>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					transform: `rotate(${orbit}deg) translateY(${dip}px) scale(${zoom})`,
					transformOrigin: '360px 640px',
				}}
			>
				<svg width={720} height={1280} viewBox="0 0 720 1280">
					{/* Backdrop facets */}
					<polygon points="0,0 720,0 720,420 0,520" fill="#e8ddc8" />
					<polygon points="0,520 720,420 720,1280 0,1280" fill="#ddd0b4" />
					<polygon points="0,900 720,820 720,1280 0,1280" fill="#d3c4a4" />

					{/* Jeans front panel, faceted low-poly, pivot at centre */}
					<g transform={`translate(0 ${floatY}) rotate(${spin} 360 640)`}>
						<polygon points="130,400 590,400 610,980 110,980" fill="#3b5f8a" />
						<polygon points="130,400 360,400 360,980 110,980" fill="#466fa0" />
						<polygon points="360,400 590,400 610,980 360,980" fill="#2f4f73" />
						<polygon points="130,400 360,400 300,640 110,640" fill="#5a7fb0" />
						<polygon points="360,400 590,400 610,640 420,640" fill="#274664" />
						{/* Waistband */}
						<polygon points="130,400 590,400 585,470 135,470" fill="#243b52" />
						<polygon points="130,400 360,400 358,470 135,470" fill="#2e4a66" />
						{/* Main pocket opening, left side */}
						<polygon points="150,470 330,470 300,640 170,640" fill="#1d3348" />
						<polygon points="150,470 330,470 320,540 165,540" fill="#274664" />

						{/* Tools and dust in the main pocket, 15-25s */}
						<g
							transform={`translate(240 560) scale(${toolsScale}) translate(-240 -560) translate(0 ${dustDrift})`}
						>
							<polygon points="190,520 230,500 250,560 210,580" fill="#8a8f96" />
							<polygon points="230,500 260,520 250,560 230,540" fill="#6e737a" />
							<polygon points="250,560 290,540 300,600 260,610" fill="#b0893c" />
							<circle cx="200" cy="600" r="7" fill="#a89878" />
							<circle cx="285" cy="590" r="5" fill="#a89878" />
							<circle cx="240" cy="620" r="6" fill="#8f8266" />
						</g>

						{/* Tiny pocket: lifts off, floats, snaps back */}
						<g
							transform={`translate(0 ${pocketLift + pocketBob}) rotate(${pocketRot} 500 520)`}
						>
							<polygon points="440,470 570,470 560,600 450,600" fill="#466fa0" />
							<polygon points="440,470 505,470 500,600 450,600" fill="#5a7fb0" />
							<polygon points="505,470 570,470 560,600 500,600" fill="#2f4f73" />
							<polygon points="440,470 570,470 566,492 444,492" fill="#243b52" />
							<circle cx="452" cy="588" r="5" fill="#d9a441" />
							<circle cx="558" cy="588" r="5" fill="#d9a441" />
						</g>

						{/* Pocket watch: slides in 5-15s, then rides with the
						    lifted pocket so it sits visibly inside it */}
						<g
							transform={`translate(${watchX} ${watchY + pocketLift + pocketBob}) rotate(${watchSwing} 500 520)`}
						>
							<circle cx="500" cy="520" r="62" fill="#d9a441" />
							<circle cx="500" cy="520" r="48" fill="#f2e6c8" />
							<polygon points="500,520 500,478 528,500" fill="#2b2b2b" />
							<polygon points="500,520 478,528 500,540" fill="#2b2b2b" />
							<circle cx="500" cy="520" r="6" fill="#2b2b2b" />
							<circle cx="500" cy="448" r="12" fill="#b0893c" />
							<polygon points="500,436 512,410 524,436" fill="#d9a441" />
						</g>
					</g>
				</svg>
			</div>
		</AbsoluteFill>
	);
};
