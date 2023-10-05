import React, { useRef, useState, useEffect, useCallback } from "react";
import WaveSurfer from "wavesurfer.js/dist/wavesurfer.esm.js";
import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";

//import audio
const audio1 = require("./audio/audio.wav");
const audio2 = require("./audio/demo.wav");

//hook
const useWavesurfer = (containerRef, options) => {
	const [wavesurfer, setWavesurfer] = useState(null);

	const initializeWaveSurfer = useCallback(() => {
		if (!containerRef.current) return;

		const ws = WaveSurfer.create({
			...options,
			container: containerRef.current
		});

		setWavesurfer(ws);

		return () => {
			ws.destroy();
		};
	}, [options, containerRef]);

	useEffect(() => {
		return initializeWaveSurfer();
	}, [initializeWaveSurfer]);

	return wavesurfer;
};

// buttons
const WaveSurferPlayer = (props) => {
	const containerRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	const [answerCurrentTime, setAnswerCurrentTime] = useState(`Lets start it`);
	const [zoomEdit, setZoomEdit] = useState(1);
	const wavesurfer = useWavesurfer(containerRef, props);

	const onPlayClick = useCallback(() => {
		wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
	}, [wavesurfer]);

	const handlezoomEditChange = (e) => {
		const newZoomEdit = parseInt(e.target.value, 10);
		setZoomEdit(newZoomEdit);
		wavesurfer.zoom(newZoomEdit);
	};

	const zoomInX5 = () => {
		let newZoomEdit;
		if (zoomEdit * 5 < 125) {
			newZoomEdit = 125;
		}
		if (zoomEdit * 5 > 1000) {
			newZoomEdit = 1000;
		} else {
			newZoomEdit = zoomEdit * 5;
		}
		setZoomEdit(newZoomEdit);
		wavesurfer.zoom(newZoomEdit);
	};

	const zoomOutX5 = () => {
		let newZoomEdit;
		if (zoomEdit / 5 < 5) {
			newZoomEdit = 1;
		} else {
			newZoomEdit = zoomEdit / 5;
		}
		setZoomEdit(newZoomEdit);
		wavesurfer.zoom(newZoomEdit);
	};

	const currentTimeShow = (currentTime) => {
		const newCurrentTime = currentTime.toFixed(2);
		if (newCurrentTime > 60) {
			const min = Math.trunc(newCurrentTime / 60);
			const sec = Math.trunc(newCurrentTime - min * 60);
			const answer = `${min} min ${sec} sec ( ${newCurrentTime})`;
			setAnswerCurrentTime(answer);
		} else {
			const answer = `${newCurrentTime} sec ( ${newCurrentTime})`;
			setAnswerCurrentTime(answer);
		}
	};

	// Initialize wavesurfer when the container mounts
	// or any of the props change
	useEffect(() => {
		if (!wavesurfer) return;

		setIsPlaying(false);

		const subscriptions = [
			wavesurfer.on("play", () => setIsPlaying(true)),
			wavesurfer.on("pause", () => setIsPlaying(false)),
			wavesurfer.on("timeupdate", (currentTime) => currentTimeShow(currentTime))
		];

		return () => {
			subscriptions.forEach((unsub) => unsub());
		};
	}, [wavesurfer]);

	return (
		<>
			<div ref={containerRef} style={{ minHeight: "120px" }} />

			<button onClick={onPlayClick} style={{ marginTop: "1em" }}>
				{isPlaying ? "Pause" : "Play"}
			</button>

			<p>Played: {answerCurrentTime}</p>

			<label>
				zoom:
				<input
					type="range"
					min="1"
					max="1000"
					value={zoomEdit} // Bind the value to the cursorWidth state
					onChange={handlezoomEditChange} // Handle cursor width changes
				/>
			</label>

			<button onClick={zoomInX5}>Zoom in x5</button>

			<button onClick={zoomOutX5}>Zoom out x5</button>
		</>
	);
};

// Another React component that will render two wavesurfers
const WavesurferExport = () => {
	const urls = [audio1, audio2];
	const [audioUrl, setAudioUrl] = useState(urls[0]);

	// Swap the audio URL
	const onUrlChange = useCallback(() => {
		urls.reverse();
		setAudioUrl(urls[0]);
	}, [urls]);

	return (
		<>
			<WaveSurferPlayer
				height={100}
				waveColor="green"
				progressColor="blue"
				cursorColor="red"
				url={audioUrl}
				plugins={[Timeline.create()]}
			/>
			<br />
			<button onClick={onUrlChange}>Change audio</button>
		</>
	);
};

export default WavesurferExport;
