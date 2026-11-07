# Clothing Science Explainer

## Verify the fact first

- Verify the clothing fact with `browser.search` and `browser.open` before you write any hook.

- Keep only a fact you can source from what you read and drop any angle the verified fact does not support.

- Never invent people, stories, dates or numbers when you fill in the fact or the hooks.

## Write the eight hooks

- Write eight spoken hooks for one video and name the part in the opening shot within the first few words of each hook.

- Make each hook about the viewer's own clothes or habits and keep each hook to 12 words or fewer.

- Give each hook one unanswered question and one surprise that is true according to the verified fact and nothing more.

- Vary the angle across the eight hooks across using something wrong, a false common assumption, a check the viewer can do on their own clothes right now, the real story behind the detail, and a true fact that sounds wrong.

- Avoid generic openers such as Did you know, You will not believe, Here is why, and Nobody tells you.

## Choose the strongest hook

- Choose the strongest hook yourself and go with that hook for the video.

- Do not ask Dario to pick the topic or the hook when the brief already assigns that choice to you.

- Use this skill only for the clothing explained like science project and do not bring back the abandoned stop-motion characters, files or context.

## Hold the master style

- Build one continuous 30 second video in vertical 9 to 16 low-poly 3D animation with faceted geometry, matte solid colors and no photorealism.

- Keep the camera locked on one central pivot and orbiting continuously while it slowly rises and dips, with the pivot dead center at all times.

- Keep something on the object always animating besides the camera, with parts lifting off, separating, rotating, sliding and snapping back, and let the object slowly spin and float when nothing is being demonstrated.

- Put a crisp sound effect on the exact frame of every visible movement and use no music, no on-screen captions, no cuts, no fades and no title cards. Do not rely on the video generator for sound effects, its audio is muted. Build a separate timed sound-effects track and mix it in Remotion as a second Audio track under the narration, so it never masks the voice.
- Approved sound effects only, Dario's rule 2026-11-06: use only the effects he has approved, and ask him first before using any new effect in a future video. Approved list: Simple Whoosh from Pixabay by DRAGON-STUDIO (1s, approved 2026-11-06), metallic clink, click, soft thunk, snap. Rejected: the synthesized whooshes, the synthesized rustle, and the Pixabay Whoosh Bright Panning 6 and Whoosh Cinematic. Do not synthesize swooshes or rustles in code again, they sound fake; use real library sounds and get them approved first.

- Start with the action already in progress on the first frame and end mid-motion on the last frame.

- Use a narrator voice for the spoken hooks and narration, which avoids a two-character dialogue problem.

## Checks, every time, before delivery

- Look-consistency check: extract frames from every segment and from the final stitched video, at least at 2s, 8s, 18s, and 28s, read them, and compare the look across segments. The look must stay faceted low-poly, matte solid colors, no photorealism, in every segment. If any segment varies, redo that segment, then recheck all frames again. Do not deliver a video with a known look drift.
- Continuous-talking check: someone must be talking the entire 30 seconds, with no silence gap. Do not trust the video generator's built-in voice for this, its voice and accent can change between segments and it can go silent for whole seconds.
- Audio check method: run ffmpeg silencedetect on every segment and on the final video, and transcribe the audio with timestamps when silence is suspected. A silence gap over 1 second is a fail, redo or replace the audio for that segment. Better than checking the generator's audio after the fact is to strip it and lay one continuous narrator TTS track over the whole 30 seconds in Remotion, using one narrator voice, so the voice, accent, and talking coverage are controlled, not left to the generator. Do not stretch the voice by slowing it down to fill 30 seconds, that reads as too slow. Keep the narrator near normal speed, around 97 to 100, and expand the narration with more verified-fact wording to fill the time instead, so talking stays continuous and brisk.
- Remotion waveform idea, evaluated: Remotion can play and mix audio, but it does not analyze a waveform or detect silence by itself. ffmpeg silencedetect, plus a waveform image from ffmpeg showwavespic, plus a Whisper transcription with timestamps, is the better check, because it measures the actual audio file. Use that, not Remotion, for the silence check.

## Choose the topic
- Use the separate skill at ~/workspace/custom-skills/choose_topic/SKILL.md for finding topics and writing hooks. It supersedes the older hook-only rules here for topic choice: reason jump, informed viewer, primary sources first, gates, at least 10 candidates, three rounds max, never lower the bar and never make up a topic.

## Assemble and deliver

- Combine all segments into one continuous video in order and output only the final combined video.
- Upscale from now on, Dario 2026-11-06: after the Remotion render, upscale the final video with ffmpeg lanczos to 1080x1920, free and local, about 80 seconds for a 30 second video. It is interpolation, it does not add real detail.
- When you send a video, send only the video, a good title for the video, and a description for the video that includes four hashtags and nothing else. After delivering, add the topic to the used-topics list in memory.

- Test a short render for this low-poly format before you promise a full video, since the verified 2026-11-05 Remotion render joined clips from the abandoned series and did not test low-poly generation.

- Check the generation task status before you report success and never repeat a failed generation without checking its task or recent work first.

- Do not claim a native 60 fps render, since asking the generator for 60 fps came back at 24 fps and an ffmpeg conversion only duplicates frames.

- Tell Dario plainly that you cannot watch rendered playback, so he stays the judge of whether the video looks right.

## Available connectors

- Use `muse.connector_search` to find other connectors and `muse.skill_search` to find related skills.

- If nothing here fits, look on the web for a maintained API or MCP server and set it up with [Custom Connectors and MCPs](/opt/muse/skills/custom-connector-setup/SKILL.md), or build a custom connector.

## Alternatives for better results

- When the verified fact supports only one strong angle, write the eight hooks around that one fact instead of stretching to an unsupported angle.

- When a generation fails, check the task status and report what completed before you try a different route.
