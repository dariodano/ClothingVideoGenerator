# Clothing Science Explainer

## Verify the fact first

- Verify the clothing fact with `browser.search` and `browser.open` before you write any hook.

- Keep only a fact you can source from what you read and drop any angle the verified fact does not support.

- Never invent people, stories, dates or numbers when you fill in the fact or the hooks.

## Write the three hooks

- Write three spoken hooks for one video and name the part in the opening shot within the first few words of each hook.

- Make each hook about the viewer's own clothes or habits and keep each hook to 12 words or fewer.

- Give each hook one unanswered question and one surprise that is true according to the verified fact and nothing more.

- Vary the angle across the three hooks using something wrong, a false common assumption, a check the viewer can do on their own clothes right now, the real story behind the detail, and a true fact that sounds wrong.

- Avoid generic openers such as Did you know, You will not believe, Here is why, and Nobody tells you.

## Choose the strongest hook

- Choose the strongest hook yourself and go with that hook for the video.

- Do not ask Dario to pick the topic or the hook when the brief already assigns that choice to you.

- Use this skill only for the clothing explained like science project and do not bring back the abandoned stop-motion characters, files or context.

## Story structure toolkit (added 2026-11-07)

Do not write every script as hook, then immediate answer, then chronology. That kills tension in sentence two. Pick one structure per topic, from the toolkit below, and name it in the brief before writing the narration.

- ABT, always: use And / But / Therefore as the sentence logic under every structure. Every beat must cause the next one. Never chain beats with "and then".
- Delay the answer: do not name the true reason until about 12 to 15 seconds, unless the chosen structure says otherwise. The hook asks, clues build, the reveal lands.
- Visual first, then why: say what the viewer is seeing, then explain it.
- One surprise per beat, each beat ending with a reason to keep watching. Put dates and numbers late, as proof, not as the opening.
- Callback: the last line echoes the first line with new meaning, and invites the viewer to look at their own clothes again.

Default arc, Mystery (use unless another structure fits the fact better):
- 0 to 5s: mystery, do not answer yet. Hook plus a visual contradiction.
- 5 to 12s: stakes and first clue. Make it personal, check your own clothes, end on a mini-question.
- 12 to 20s: the twist. The real reason, revealed as a turn, not a lecture.
- 20 to 26s: proof. The number, rejection, or patent lands here, as a punchline.
- 26 to 30s: payoff and callback. Repeat the hook wording with new meaning, end mid-motion.

Alternatives, pick the one that fits the fact, do not use the same one twice in a row:
- Myth vs. fact / debunk: state the common guess as if true, show why it fails, replace it. Best for tariff, trademark, and labeling topics, where the guess is the point. Weak for invention stories with no strong false belief.
- How it works / problem-solution: problem, mechanism step by step, it works. Best for a mechanism that can be shown on the object. Add a mystery question on top, or it turns into a lecture.
- Before / after / contrast: show the guess and the truth side by side on the same object, two different worlds. Best when the contrast is clean and visual, for example a sneaker that is legally a slipper.
- In medias res / cold open: start at the climax, the shoe splitting or the pouch springing back, then rewind to explain how we got there. Best for the first 2 seconds, hard in one continuous shot with no cuts, do not jump around in time if it confuses the mechanism.
- Loop / circular: start and end on the same shot, meaning changed. Best as an ending for Mystery, not a structure on its own.
- Kishotenketsu: introduction, development, twist, conclusion, no conflict, no villain. Best when the topic has a twist but no fight, which is most of these topics.
- Clue chain / detective's notebook: three clues, each one ruling out a guess, the third clue forces the truth. Best when there are three distinct, showable clues on the object.
- Courtroom / trial: the guess is the charge, the evidence is shown one piece at a time, the verdict is the true reason. Best for trademark and patent topics, where a ruling or registration is the proof. Do not invent a courtroom, a judge, or dialogue; keep it to the object and the evidence.
- Then vs. now / time travel: the object as it was, the object as it is, what changed in one specific year and why. Best only when a dated change is the mechanism, and the date is verified.
- The bet / wager: "I bet you think X. You would lose." Best sparingly, at most one video in three, or it becomes a gimmick. The bet must be the viewer's own guess, not a straw man.
- Origin story / biography: chronological, inventor to product. Use only when chronology IS the mechanism, and still delay the answer. This is the old default, do not use it by habit.

Selection rule: law and tariff topics start with Myth vs. fact. Invention topics start with Mystery. Mechanism topics start with How it works. If the fact supports only one strong angle, write the script around that one fact instead of stretching to an unsupported angle, in whichever structure was picked.

## Hold the master style

- Build one continuous 30 second video in vertical 9 to 16 low-poly 3D animation with faceted geometry, matte solid colors and no photorealism.

- Keep the camera locked on one central pivot and orbiting continuously while it slowly rises and dips, with the pivot dead center at all times.

- Keep something on the object always animating besides the camera, with parts lifting off, separating, rotating, sliding and snapping back, and let the object slowly spin and float when nothing is being demonstrated.

- Put a crisp sound effect on the exact frame of every visible movement and use no music, no cuts, no fades and no title cards. Place each sound effect where the movement actually happens on screen, measured by the motion check below — never where the word falls in the narration. One sound per real movement, never two within 1 second of each other; fewer sounds, each landing on a visible move, beats more sounds timed to words. Subtitles are standard: TikTok Sans Bold, white only, 3-4 words per chunk, 40% down. Do not rely on the video generator for sound effects, its audio is muted. Build a separate timed sound-effects track and mix it in Remotion as a second Audio track under the narration, so it never masks the voice.
- Approved sound effects only: use only the effects Dario has approved. Send any new sound to Dario before making a video with it, and do not use it until he approves. Approved list: Simple Whoosh from Pixabay by DRAGON-STUDIO (1s, approved 2026-11-06), metallic clink, click, soft thunk, snap. Rejected: the synthesized whooshes, the synthesized rustle, and the Pixabay Whoosh Bright Panning 6 and Whoosh Cinematic. Do not synthesize swooshes or rustles in code again, they sound fake; use real library sounds and get them approved first.

- Start with the action already in progress on the first frame and end mid-motion on the last frame.

- Use a narrator voice for the spoken hooks and narration, which avoids a two-character dialogue problem.

## Checks, every time, before delivery

- Look-consistency check: extract frames from every segment and from the final stitched video, at least at 2s, 8s, 18s, and 28s, read them, and compare the look across segments. The look must stay faceted low-poly, matte solid colors, no photorealism, in every segment. If any segment varies, redo that segment, then recheck all frames again. Do not deliver a video with a known look drift.
- Continuous-talking check: someone must be talking the entire 30 seconds, with no silence gap. Do not trust the video generator's built-in voice for this, its voice and accent can change between segments and it can go silent for whole seconds.
- Audio check method: run ffmpeg silencedetect on every segment and on the final video, and transcribe the audio with timestamps when silence is suspected. A silence gap over 1 second is a fail, redo or replace the audio for that segment. Better than checking the generator's audio after the fact is to strip it and lay one continuous narrator TTS track over the whole 30 seconds in Remotion, using one narrator voice, so the voice, accent, and talking coverage are controlled, not left to the generator. Do not stretch the voice by slowing it down to fill 30 seconds, that reads as too slow. Narration target is ~100 words for 30 seconds. You can go over 100 words as long as the script and video lengths match. Keep the narrator near normal speed and expand the narration with more verified-fact wording to fill the time instead of slowing the voice. Voice: avocado_v2:MAI_03 (Helio). Do not assume one speed fits every script — speed 105 delivered for Nike Air, but the same 100 words needed speed 116 for the waffle sole (105 ran 32.35s). Measure the narration length and adjust speed per script.
- Remotion waveform idea, evaluated: Remotion can play and mix audio, but it does not analyze a waveform or detect silence by itself. ffmpeg silencedetect, plus a waveform image from ffmpeg showwavespic, plus a Whisper transcription with timestamps, is the better check, because it measures the actual audio file. Use that, not Remotion, for the silence check.

## Choose the topic
- Use the separate skill at custom-skills/choose_topic/SKILL.md in this repo for finding topics and writing hooks. It supersedes the older hook-only rules here for topic choice: reason jump, informed viewer, primary sources first, gates, at least 10 candidates, three rounds max, never lower the bar and never make up a topic.


## Time the pictures to the words (added 2026-11-09)

Dario's verdict on the waffle sole video (2026-11-09): "pretty good", but the sound effects seemed randomly placed — because cues were anchored to narration words, not to movement on screen. Fix it this way, every video from now on.

- Record the narration FIRST, then get word-level timestamps for it (Whisper with timestamps). That gives a time for every word, as text.
- Each segment prompt carries the exact seconds for each movement, not just the beat: "grid squares lift at 2.0s, flip at 3.5s", not "grid squares lift and flip sometime in the first 5 seconds". One prompt per segment, four total, same style block reused.
- Motion check, without looking: a script (ffmpeg + Python, run on the machine) pulls 10 tiny grayscale frames per second from each segment, computes the mean absolute difference between consecutive frames, and reports only the onsets/peaks — the timestamps where movement jumps. The frames never enter context; only the short list of peak times does. That keeps the check to tens of tokens per segment instead of thousands per image.
- Compare the two lists: for each planned move, the nearest measured motion onset must be within about 0.3s of the word it belongs to. If it is off by more, the segment failed — regenerate it. Only look at a frame if the numbers disagree.
- Catch: the camera never stops orbiting, so motion is never zero — look for the jump above the baseline, or measure only the centre of the frame where the object is, not the edges where the camera movement shows up most.
- Content check the numbers cannot do: look at exactly one frame per segment at its key moment (4 frames total) to catch content errors — for example a tread pattern appearing on the shoe upper when the script describes a shoe without tread. Motion numbers cannot catch that; eyes can, but only four frames' worth.

## Shot design (added 2026-11-09)

Video generators do not understand objects: they smear textures across surfaces, lose object identity between shots, and fumble deliberate transformations. Design shots that do not ask them to do the things they are sloppy at.

- One object, one action per shot. If a shot shows a shoe plus an iron plus a conveyor belt, the generator mashes them together — remove elements until the shot makes sense. If the whole shoe in the iron looks confusing, take the shoe out and show only the flat grid plate going into the press.
- Every beat lists what must NOT appear, as well as what must: "squares only on the underside of the sole, upper is plain and smooth, no pattern on the upper."
- The "before" state gets its own shot. A shoe without tread must be shown smooth-soled before the grid arrives, or the generator pastes the grid everywhere from the start.
- Open on the whole object, then use a camera move to reveal the detail. Do not ask the generator for an object-to-object transformation (a shoe becoming a waffle iron) — stage it as parts lifting off and a pattern appearing instead.
- Do NOT move the motion into Remotion. Motion stays in the generated segments; Remotion is the stitcher only.

## Visual creativity — the first 8 seconds decide everything (added 2026-11-09)

Dario's verdict on the genuine leather video (2026-11-09): the first 4 seconds were just a wallet rotating, then 3.5 more seconds zooming into the same wallet — almost 8 seconds of one object on screen, nothing engaging. Nobody watches a plain object rotate for 8 seconds. This is a fail, not a style choice.

- Never open with a static object merely rotating, floating, or being slowly zoomed into. Something new must happen every 2 to 3 seconds — not every 5. A single action stretched across 5 seconds is still boring: a wallet being cut in half for 5 seconds is 5 seconds of one thing. The cut itself happens in 1 to 2 seconds, then the next event starts. Every segment must contain 2 to 4 distinct timed micro-events, one every 2 to 3 seconds, each matched to a word in the narration. Frame 1 must already be mid-change, not mid-rotation.
- No segment may be only "object rotates" or "camera zooms". Every segment must contain a distinct visual event — a new action, a new state, a new element arriving. A segment with no change of state fails and must be regenerated. Segment prompts list 2 to 4 timed micro-events (one every 2 to 3 seconds), not one action for the whole segment.
- Vary scale and angle between beats: wide shot, then close-up, then cross-section, then detail — never the same framing twice in a row. The object must DO something in every beat, not just be shown from another angle.
- Dramatize the IDEA, not just the words. Every event must be an attention magnet tied to what the narration means — not a literal illustration of it. Dario's example (2026-11-09, genuine leather): the wallet flips upside down and money falls out of it in the middle of the flip — people's attention is drawn to falling money, and the visual says "waste of money" before the words do, because the video is about genuine leather being a waste of money. For every beat, ask: what would make someone who does not care about this object look — and make that event mean the fact.
- Do not animate every segment from the same still hero image with only rotation/zoom. Each segment prompt must name its own action and its own change.

## Text in generated images (added 2026-11-09)

Dario's verdict on the genuine leather video (2026-11-09): the words "genuine leather" floated upwards at random — bad AI image generation. Text must never appear by accident.

- Default: every image and video prompt includes "no text, no letters, no words, no labels, no watermarks".
- Text appears ONLY when the brief explicitly names it as the subject of the shot — for example a stamp on the leather — and then it must be rendered as a clean, fixed stamp or label ON the object itself, legible, still, and part of the object. Never floating, never drifting, never random words in the background.
- If generated text comes out garbled, misspelled, floating, or anywhere it was not deliberately placed, the segment failed — regenerate it. Do not keep a segment with accidental text.

## Build (Remotion, reuse the code in this repo)
- Use ONE Remotion composition for every video: clothing-explained/remotion/src/ClothingExplained.tsx. Do NOT make a new TSX file per video. It takes a `folder` prop and plays that folder's seg1-4.mp4, narration.mp3, and sfx.mp3. Render with --props='{"folder":"<topic-folder>"}'. 720 frames, 24fps, 720x1280, 30 seconds, one continuous shot.
- Segments: 4 segment videos per video, 5s + 10s + 10s + 5s, plus 1 hero image. Max 4 segment generations, plus retries to a total of 6. Regenerate a bad segment only if it is visibly wrong; do not keep retrying the same prompt.
- Render with Remotion, not ffmpeg stitch: first `npx remotion browser ensure` to download the Chrome Headless Shell, then render with that shell, not the system Chrome. Burn subtitles, then upscale with ffmpeg lanczos to 1080x1920.
- Testing now: ask Dario before building a video. Final mode, when Dario says so: do the whole thing without asking — search topic, write hooks and narration, build, render, deliver video + title + description with at least 4 hashtags.

## Assemble and deliver

- Combine all segments into one continuous video in order and output only the final combined video.
- Upscale from now on, Dario 2026-11-06: after the Remotion render, upscale the final video with ffmpeg lanczos to 1080x1920, free and local, about 80 seconds for a 30 second video. It is interpolation, it does not add real detail.
- When you send a video, send only the video, a good title for the video, and a description for the video that includes at least four hashtags and nothing else. Title: around 5 words. Description: around 10 words plus 4 hashtags. NEITHER the title NOR the description may give away the answer — both must tease with a question, like the hook, never sum up the video. Dario 2026-11-09: "did you waste your money on genuine leather ??" is the shape a description should take. A description that states the fact ("genuine leather only promises real hide, never the best layer") is wrong. After delivering, add the topic to the used-topics list in memory.

- Test a short render for this low-poly format before you promise a full video, since the verified 2026-11-05 Remotion render joined clips from the abandoned series and did not test low-poly generation.

- Check the generation task status before you report success and never repeat a failed generation without checking its task or recent work first.

- Do not claim a native 60 fps render, since asking the generator for 60 fps came back at 24 fps and an ffmpeg conversion only duplicates frames.

- You cannot watch rendered playback, so Dario remains the judge of whether the video looks right.

## Available connectors

- Use `muse.connector_search` to find other connectors and `muse.skill_search` to find related skills.

- If nothing here fits, look on the web for a maintained API or MCP server and set it up with [Custom Connectors and MCPs](/opt/muse/skills/custom-connector-setup/SKILL.md), or build a custom connector.

## Alternatives for better results

- When the verified fact supports only one strong angle, write the three hooks around that one fact instead of stretching to an unsupported angle.

- When a generation fails, check the task status and report what completed before you try a different route.
