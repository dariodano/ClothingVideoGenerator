# Clothing Explained, video 1: jeans coin pocket, visual draft

Fresh Remotion 4.0.541 project (no files from the abandoned stop-motion series; only the package setup and the headless-browser workaround were reused). `node_modules` and `.browser` are symlinks to the earlier test project to avoid a reinstall.

## What was built

- Composition `CoinPocketFinal` in `src/CoinPocketFinal.tsx` (draft `CoinPocket.tsx` removed 2026-11-07): 720 frames at 24 fps, 720x1280, 30 seconds, one continuous shot, no cuts, no fades, no captions, no title cards.
- Low-poly faceted jeans panel in matte denim blues, tiny pocket that lifts off and floats, pocket watch that slides in and rides with the lifted pocket, tools and dust in the main pocket from 15s, pocket snapping back 25-29s.
- Camera: continuous orbit around the centre pivot (360, 640), rising and dipping, never stopping, action already moving on frame 1 and still moving on the last frame.
- Output: `out/coin-pocket-draft.mp4`, 919 KB.
- Narration script and sound-effect cues: `narration.md` (timed lines, about 70 words, verified fact only, no dates or extra numbers).

## Verification, 2026-11-05

- Rendered 720/720 frames. ffprobe: 30.000s, 720x1280, 24 fps, h264.
- Frames checked at 2s, 8s, 18s, 28s: none black, content present in order. At 18s the watch sits visibly in the lifted pocket and the tools are in the main pocket.
- Two flaws found in the first render and fixed before this version: the watch first landed below the lifted pocket instead of inside it, and the tools appeared before 15s. Both were corrected and re-rendered.

## How to render again

```bash
cd ~/workspace/clothing-explained/remotion
npx remotion render src/index.ts CoinPocketFinal out/coin-pocket-final.mp4 \
  --browser-executable=$PWD/.browser/chrome-headless-shell-linux64/chrome-headless-shell
```

## Limits, stated honestly

- Silent visual draft only: no narrator voice and no sound effects recorded yet. Those are separate tracks, scripted in `narration.md`, to add once Dario approves the script and the look.
- The jeans shape is deliberately simple geometry, a rough draft to judge timing, orbit, and the pocket/watch story, not a finished 3D model.
- Wally cannot watch rendered playback, so Dario is still the judge of whether it looks right.
