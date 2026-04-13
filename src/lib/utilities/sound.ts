import * as Tone from 'tone';

import {
	CRT_SOUND_PROFILE_ORDER,
	SOUND_PRESETS,
	type CRTPulseVariant,
	type CRTSoundProfile
} from './sound-presets';

export {
	CRT_SOUND_PROFILE_LABELS,
	CRT_SOUND_PROFILE_ORDER,
	type CRTPulseVariant,
	type CRTSoundProfile
} from './sound-presets';

type DisposableNode = {
	dispose: () => void;
};

type StoppableNode = {
	stop: () => void;
};

type AmbientInstance = {
	stop: () => void;
	dispose: () => void;
};

let ambientInstance: AmbientInstance | null = null;
let ambientProfile: CRTSoundProfile | null = null;

const disposeNodes = (nodes: DisposableNode[]) => {
	for (const node of nodes) {
		node.dispose();
	}
};

const stopNodes = (nodes: StoppableNode[]) => {
	for (const node of nodes) {
		node.stop();
	}
};

const disposeAfter = (delay: number, nodes: DisposableNode[]) => {
	window.setTimeout(() => {
		disposeNodes(nodes);
	}, delay);
};

const createScannerAmbient = (): AmbientInstance => {
	const preset = SOUND_PRESETS.scanner.ambient;
	const master = new Tone.Gain(preset.masterGain * SOUND_PRESETS.scanner.levels.ambient);
	const phaser = new Tone.Phaser({ ...preset.phaser.options }).toDestination();
	phaser.wet.value = preset.phaser.wet;
	master.connect(phaser);

	const rumble = new Tone.Oscillator({ ...preset.rumble.oscillator });
	const rumbleFilter = new Tone.Filter({ ...preset.rumble.filter });
	const rumbleDrive = new Tone.Distortion(preset.rumble.drive.distortion);
	rumbleDrive.wet.value = preset.rumble.drive.wet;
	const rumbleGain = new Tone.Gain(preset.rumble.gain);

	const grind = new Tone.Noise({ ...preset.grind.noise });
	const grindFilter = new Tone.Filter({ ...preset.grind.filter });
	const grindShaper = new Tone.Chebyshev(preset.grind.shaper.order);
	grindShaper.wet.value = preset.grind.shaper.wet;
	const grindGain = new Tone.Gain(preset.grind.gain);

	const scanline = new Tone.Oscillator({ ...preset.scanline.oscillator });
	const scanlineFilter = new Tone.Filter({ ...preset.scanline.filter });
	const scanlineGain = new Tone.Gain(preset.scanline.gain);

	const grindDrift = new Tone.LFO({ ...preset.lfo.grindDrift });
	const rumbleWobble = new Tone.LFO({ ...preset.lfo.rumbleWobble });
	const artifactFlicker = new Tone.LFO({ ...preset.lfo.artifactFlicker });

	rumble.connect(rumbleFilter);
	rumbleFilter.connect(rumbleDrive);
	rumbleDrive.connect(rumbleGain);
	rumbleGain.connect(master);

	grind.connect(grindFilter);
	grindFilter.connect(grindShaper);
	grindShaper.connect(grindGain);
	grindGain.connect(master);

	scanline.connect(scanlineFilter);
	scanlineFilter.connect(scanlineGain);
	scanlineGain.connect(master);

	grindDrift.connect(grindFilter.frequency);
	rumbleWobble.connect(rumble.frequency);
	artifactFlicker.connect(scanlineGain.gain);

	rumble.start();
	grind.start();
	scanline.start();
	grindDrift.start();
	rumbleWobble.start();
	artifactFlicker.start();

	return {
		stop: () => {
			stopNodes([rumble, grind, scanline, grindDrift, rumbleWobble, artifactFlicker]);
		},
		dispose: () => {
			disposeNodes([
				rumble,
				rumbleFilter,
				rumbleDrive,
				rumbleGain,
				grind,
				grindFilter,
				grindShaper,
				grindGain,
				scanline,
				scanlineFilter,
				scanlineGain,
				master,
				phaser,
				grindDrift,
				rumbleWobble,
				artifactFlicker
			]);
		}
	};
};

const createTerminalAmbient = (): AmbientInstance => {
	const preset = SOUND_PRESETS.terminal.ambient;
	const master = new Tone.Gain(
		preset.masterGain * SOUND_PRESETS.terminal.levels.ambient
	).toDestination();

	const floor = new Tone.Noise({ ...preset.floor.noise });
	const floorFilter = new Tone.Filter({ ...preset.floor.filter });
	const floorGain = new Tone.Gain(preset.floor.gain);

	const hiss = new Tone.Noise({ ...preset.hiss.noise });
	const hissFilter = new Tone.Filter({ ...preset.hiss.filter });
	const hissMotion = new Tone.AutoFilter({ ...preset.hiss.motion });
	const hissGain = new Tone.Gain(preset.hiss.gain);

	const grain = new Tone.Noise({ ...preset.grain.noise });
	const grainFilter = new Tone.Filter({ ...preset.grain.filter });
	const grainGain = new Tone.Gain(preset.grain.gain);

	const pressure = new Tone.LFO({ ...preset.lfo.pressure });
	const turbulence = new Tone.LFO({ ...preset.lfo.turbulence });
	const hissSurge = new Tone.LFO({ ...preset.lfo.hissSurge });

	floor.connect(floorFilter);
	floorFilter.connect(floorGain);
	floorGain.connect(master);

	hiss.connect(hissFilter);
	hissFilter.connect(hissMotion);
	hissMotion.connect(hissGain);
	hissGain.connect(master);

	grain.connect(grainFilter);
	grainFilter.connect(grainGain);
	grainGain.connect(master);

	pressure.connect(floorFilter.frequency);
	turbulence.connect(grainFilter.frequency);
	hissSurge.connect(hissGain.gain);

	floor.start();
	hiss.start();
	grain.start();
	hissMotion.start();
	pressure.start();
	turbulence.start();
	hissSurge.start();

	return {
		stop: () => {
			stopNodes([floor, hiss, grain, hissMotion, pressure, turbulence, hissSurge]);
		},
		dispose: () => {
			disposeNodes([
				floor,
				floorFilter,
				floorGain,
				hiss,
				hissFilter,
				hissMotion,
				hissGain,
				grain,
				grainFilter,
				grainGain,
				master,
				pressure,
				turbulence,
				hissSurge
			]);
		}
	};
};

const createMonitorAmbient = (): AmbientInstance => {
	const preset = SOUND_PRESETS.monitor.ambient;
	const master = new Tone.Gain(preset.masterGain * SOUND_PRESETS.monitor.levels.ambient);
	const chorus = new Tone.Chorus({
		frequency: preset.chorus.frequency,
		delayTime: preset.chorus.delayTime,
		depth: preset.chorus.depth
	}).toDestination();
	chorus.wet.value = preset.chorus.wet;
	chorus.start();
	master.connect(chorus);

	const hum = new Tone.Oscillator({ ...preset.hum.oscillator });
	const humFilter = new Tone.Filter({ ...preset.hum.filter });
	const humGain = new Tone.Gain(preset.hum.gain);

	const bloom = new Tone.Oscillator({ ...preset.bloom.oscillator });
	const bloomFilter = new Tone.Filter({ ...preset.bloom.filter });
	const bloomGain = new Tone.Gain(preset.bloom.gain);

	const air = new Tone.Noise({ ...preset.air.noise });
	const airFilter = new Tone.Filter({ ...preset.air.filter });
	const airGain = new Tone.Gain(preset.air.gain);

	const sparkle = new Tone.Oscillator({ ...preset.sparkle.oscillator });
	const sparkleFilter = new Tone.Filter({ ...preset.sparkle.filter });
	const sparkleGain = new Tone.Gain(preset.sparkle.gain);

	const bloomDrift = new Tone.LFO({ ...preset.lfo.bloomDrift });
	const warmth = new Tone.LFO({ ...preset.lfo.warmth });
	const airFlutter = new Tone.LFO({ ...preset.lfo.airFlutter });

	hum.connect(humFilter);
	humFilter.connect(humGain);
	humGain.connect(master);

	bloom.connect(bloomFilter);
	bloomFilter.connect(bloomGain);
	bloomGain.connect(master);

	air.connect(airFilter);
	airFilter.connect(airGain);
	airGain.connect(master);

	sparkle.connect(sparkleFilter);
	sparkleFilter.connect(sparkleGain);
	sparkleGain.connect(master);

	bloomDrift.connect(bloom.frequency);
	warmth.connect(humGain.gain);
	airFlutter.connect(airGain.gain);

	hum.start();
	bloom.start();
	air.start();
	sparkle.start();
	bloomDrift.start();
	warmth.start();
	airFlutter.start();

	return {
		stop: () => {
			stopNodes([hum, bloom, air, sparkle, chorus, bloomDrift, warmth, airFlutter]);
		},
		dispose: () => {
			disposeNodes([
				hum,
				humFilter,
				humGain,
				bloom,
				bloomFilter,
				bloomGain,
				air,
				airFilter,
				airGain,
				sparkle,
				sparkleFilter,
				sparkleGain,
				master,
				chorus,
				bloomDrift,
				warmth,
				airFlutter
			]);
		}
	};
};

export const startCRTAmbience = (profile: CRTSoundProfile) => {
	if (ambientInstance && ambientProfile === profile) return;

	stopCRTAmbience();

	switch (profile) {
		case 'terminal':
			ambientInstance = createTerminalAmbient();
			break;

		case 'monitor':
			ambientInstance = createMonitorAmbient();
			break;

		default:
			ambientInstance = createScannerAmbient();
	}

	ambientProfile = profile;
};

export const stopCRTAmbience = () => {
	if (!ambientInstance) return;

	ambientInstance.stop();
	ambientInstance.dispose();
	ambientInstance = null;
	ambientProfile = null;
};

const triggerScannerPulse = (variant: CRTPulseVariant, now: number) => {
	const levels = SOUND_PRESETS.scanner.levels;
	const preset = SOUND_PRESETS.scanner.pulse;
	const pulseGain = new Tone.Gain(levels.pulse).toDestination();
	const output = new Tone.Filter({ ...preset.outputFilter });
	output.connect(pulseGain);
	const drive = new Tone.Distortion(preset.drive.distortion);
	drive.wet.value = preset.drive.wet;
	drive.connect(output);
	const phaser = new Tone.Phaser({ ...preset.phaser.options });
	phaser.wet.value = preset.phaser.wet;
	phaser.connect(drive);

	const thump = new Tone.MembraneSynth({ ...preset.thump }).connect(phaser);

	const coil = new Tone.Oscillator({ ...preset.coil.oscillator });
	const coilFilter = new Tone.Filter({ ...preset.coil.filter });
	const coilEnvelope = new Tone.AmplitudeEnvelope({ ...preset.coil.envelope });
	coil.connect(coilFilter);
	coilFilter.connect(coilEnvelope);
	coilEnvelope.connect(phaser);

	const wash = new Tone.Noise({ ...preset.wash.noise });
	const washFilter = new Tone.Filter({ ...preset.wash.filter });
	const washEnvelope = new Tone.AmplitudeEnvelope({ ...preset.wash.envelope });
	wash.connect(washFilter);
	washFilter.connect(washEnvelope);
	washEnvelope.connect(phaser);

	coil.start(now);
	coil.stop(now + preset.coil.stopAfter);
	wash.start(now);
	wash.stop(now + preset.wash.stopAfter);

	if (variant === 'double') {
		thump.triggerAttackRelease('B0', 0.16, now, 0.94);
		thump.triggerAttackRelease('E0', 0.14, now + 0.11, 0.66);

		coil.frequency.setValueAtTime(154, now);
		coil.frequency.exponentialRampToValueAtTime(40, now + 0.24);
		coil.frequency.setValueAtTime(138, now + 0.11);
		coil.frequency.exponentialRampToValueAtTime(38, now + 0.36);
		coilFilter.frequency.setValueAtTime(580, now);
		coilFilter.frequency.exponentialRampToValueAtTime(170, now + 0.24);
		coilFilter.frequency.setValueAtTime(520, now + 0.11);
		coilFilter.frequency.exponentialRampToValueAtTime(160, now + 0.36);
		coilEnvelope.triggerAttackRelease(0.28, now, 1);
		coilEnvelope.triggerAttackRelease(0.22, now + 0.11, 0.72);

		washFilter.frequency.setValueAtTime(760, now);
		washFilter.frequency.exponentialRampToValueAtTime(320, now + 0.18);
		washFilter.frequency.setValueAtTime(700, now + 0.11);
		washFilter.frequency.exponentialRampToValueAtTime(300, now + 0.3);
		washEnvelope.triggerAttackRelease(0.08, now, 0.4);
		washEnvelope.triggerAttackRelease(0.06, now + 0.11, 0.28);
	} else if (variant === 'wobble') {
		const wobble = new Tone.LFO({ ...preset.wobble });
		wobble.connect(coilFilter.frequency);
		wobble.start(now);

		thump.triggerAttackRelease('G0', 0.2, now, 0.82);
		coil.frequency.setValueAtTime(146, now);
		coil.frequency.exponentialRampToValueAtTime(38, now + 0.4);
		coilEnvelope.triggerAttackRelease(0.4, now, 0.88);
		washFilter.frequency.setValueAtTime(680, now);
		washFilter.frequency.exponentialRampToValueAtTime(280, now + 0.26);
		washEnvelope.triggerAttackRelease(0.1, now, 0.34);

		disposeAfter(preset.disposeAfter, [wobble]);
	} else {
		thump.triggerAttackRelease('B0', 0.18, now, 0.92);
		coil.frequency.setValueAtTime(150, now);
		coil.frequency.exponentialRampToValueAtTime(40, now + 0.32);
		coilFilter.frequency.setValueAtTime(620, now);
		coilFilter.frequency.exponentialRampToValueAtTime(170, now + 0.32);
		coilEnvelope.triggerAttackRelease(0.32, now, 1);
		washFilter.frequency.setValueAtTime(720, now);
		washFilter.frequency.exponentialRampToValueAtTime(320, now + 0.2);
		washEnvelope.triggerAttackRelease(0.09, now, 0.42);
	}

	disposeAfter(preset.disposeAfter, [
		thump,
		coil,
		coilFilter,
		coilEnvelope,
		wash,
		washFilter,
		washEnvelope,
		phaser,
		drive,
		output,
		pulseGain
	]);
};

const triggerTerminalPulse = (variant: CRTPulseVariant, now: number) => {
	const levels = SOUND_PRESETS.terminal.levels;
	const preset = SOUND_PRESETS.terminal.pulse;
	const output = new Tone.Filter({ ...preset.outputFilter });
	const pulseGain = new Tone.Gain(levels.pulse).toDestination();
	const delay = new Tone.FeedbackDelay(
		preset.delay.delayTime,
		preset.delay.feedback
	).toDestination();
	delay.wet.value = preset.delay.wet;
	output.connect(pulseGain);
	output.connect(delay);

	const weight = new Tone.Noise({ ...preset.weight.noise });
	const weightFilter = new Tone.Filter({ ...preset.weight.filter });
	const weightEnvelope = new Tone.AmplitudeEnvelope({ ...preset.weight.envelope });
	weight.connect(weightFilter);
	weightFilter.connect(weightEnvelope);
	weightEnvelope.connect(output);

	const hiss = new Tone.Noise({ ...preset.hiss.noise });
	const hissFilter = new Tone.Filter({ ...preset.hiss.filter });
	const hissEnvelope = new Tone.AmplitudeEnvelope({ ...preset.hiss.envelope });
	hiss.connect(hissFilter);
	hissFilter.connect(hissEnvelope);
	hissEnvelope.connect(output);

	const coil = new Tone.Oscillator({ ...preset.coil.oscillator });
	const coilFilter = new Tone.Filter({ ...preset.coil.filter });
	const coilEnvelope = new Tone.AmplitudeEnvelope({ ...preset.coil.envelope });
	coil.connect(coilFilter);
	coilFilter.connect(coilEnvelope);
	coilEnvelope.connect(output);

	weight.start(now);
	weight.stop(now + preset.weight.stopAfter);
	hiss.start(now);
	hiss.stop(now + preset.hiss.stopAfter);
	coil.start(now);
	coil.stop(now + preset.coil.stopAfter);

	if (variant === 'double') {
		weightFilter.frequency.setValueAtTime(320, now);
		weightFilter.frequency.exponentialRampToValueAtTime(130, now + 0.22);
		weightFilter.frequency.setValueAtTime(290, now + 0.14);
		weightFilter.frequency.exponentialRampToValueAtTime(120, now + 0.34);
		weightEnvelope.triggerAttackRelease(0.18, now, 0.96);
		weightEnvelope.triggerAttackRelease(0.14, now + 0.14, 0.68);

		hissFilter.frequency.setValueAtTime(1020, now);
		hissFilter.frequency.exponentialRampToValueAtTime(420, now + 0.16);
		hissFilter.frequency.setValueAtTime(940, now + 0.14);
		hissFilter.frequency.exponentialRampToValueAtTime(380, now + 0.28);
		hissEnvelope.triggerAttackRelease(0.08, now, 0.24);
		hissEnvelope.triggerAttackRelease(0.06, now + 0.14, 0.16);

		coil.frequency.setValueAtTime(128, now);
		coil.frequency.exponentialRampToValueAtTime(42, now + 0.28);
		coil.frequency.setValueAtTime(116, now + 0.14);
		coil.frequency.exponentialRampToValueAtTime(38, now + 0.38);
		coilFilter.frequency.setValueAtTime(520, now);
		coilFilter.frequency.exponentialRampToValueAtTime(160, now + 0.28);
		coilFilter.frequency.setValueAtTime(470, now + 0.14);
		coilFilter.frequency.exponentialRampToValueAtTime(150, now + 0.38);
		coilEnvelope.triggerAttackRelease(0.3, now, 0.82);
		coilEnvelope.triggerAttackRelease(0.24, now + 0.14, 0.58);
	} else if (variant === 'wobble') {
		const wobble = new Tone.LFO({ ...preset.wobble });
		wobble.connect(hissFilter.frequency);
		wobble.connect(coilFilter.frequency);
		wobble.start(now);

		weightFilter.frequency.setValueAtTime(330, now);
		weightFilter.frequency.exponentialRampToValueAtTime(120, now + 0.26);
		weightEnvelope.triggerAttackRelease(0.2, now, 0.86);

		hissFilter.frequency.setValueAtTime(980, now);
		hissFilter.frequency.exponentialRampToValueAtTime(360, now + 0.22);
		hissEnvelope.triggerAttackRelease(0.1, now, 0.2);

		coil.frequency.setValueAtTime(120, now);
		coil.frequency.exponentialRampToValueAtTime(36, now + 0.4);
		coilFilter.frequency.setValueAtTime(500, now);
		coilFilter.frequency.exponentialRampToValueAtTime(140, now + 0.4);
		coilEnvelope.triggerAttackRelease(0.4, now, 0.74);

		disposeAfter(preset.disposeAfter, [wobble]);
	} else {
		weightFilter.frequency.setValueAtTime(340, now);
		weightFilter.frequency.exponentialRampToValueAtTime(130, now + 0.24);
		weightEnvelope.triggerAttackRelease(0.2, now, 0.9);

		hissFilter.frequency.setValueAtTime(1000, now);
		hissFilter.frequency.exponentialRampToValueAtTime(380, now + 0.18);
		hissEnvelope.triggerAttackRelease(0.1, now, 0.22);

		coil.frequency.setValueAtTime(126, now);
		coil.frequency.exponentialRampToValueAtTime(40, now + 0.32);
		coilFilter.frequency.setValueAtTime(520, now);
		coilFilter.frequency.exponentialRampToValueAtTime(150, now + 0.32);
		coilEnvelope.triggerAttackRelease(0.34, now, 0.78);
	}

	disposeAfter(preset.disposeAfter, [
		weight,
		weightFilter,
		weightEnvelope,
		hiss,
		hissFilter,
		hissEnvelope,
		coil,
		coilFilter,
		coilEnvelope,
		output,
		pulseGain,
		delay
	]);
};

const triggerMonitorPulse = (variant: CRTPulseVariant, now: number) => {
	const levels = SOUND_PRESETS.monitor.levels;
	const preset = SOUND_PRESETS.monitor.pulse;
	const output = new Tone.Filter({ ...preset.outputFilter });
	const pulseGain = new Tone.Gain(levels.pulse).toDestination();
	const chorus = new Tone.Chorus({
		frequency: preset.chorus.frequency,
		delayTime: preset.chorus.delayTime,
		depth: preset.chorus.depth
	}).toDestination();
	chorus.wet.value = preset.chorus.wet;
	chorus.start();
	output.connect(pulseGain);
	output.connect(chorus);

	const thump = new Tone.MembraneSynth({ ...preset.thump }).connect(output);

	const bloom = new Tone.Oscillator({ ...preset.bloom.oscillator });
	const bloomFilter = new Tone.Filter({ ...preset.bloom.filter });
	const bloomEnvelope = new Tone.AmplitudeEnvelope({ ...preset.bloom.envelope });
	bloom.connect(bloomFilter);
	bloomFilter.connect(bloomEnvelope);
	bloomEnvelope.connect(output);

	const air = new Tone.Noise({ ...preset.air.noise });
	const airFilter = new Tone.Filter({ ...preset.air.filter });
	const airEnvelope = new Tone.AmplitudeEnvelope({ ...preset.air.envelope });
	air.connect(airFilter);
	airFilter.connect(airEnvelope);
	airEnvelope.connect(output);

	bloom.start(now);
	bloom.stop(now + preset.bloom.stopAfter);
	air.start(now);
	air.stop(now + preset.air.stopAfter);

	if (variant === 'double') {
		thump.triggerAttackRelease('B0', 0.16, now, 0.78);
		thump.triggerAttackRelease('E0', 0.13, now + 0.13, 0.52);

		bloom.frequency.setValueAtTime(142, now);
		bloom.frequency.exponentialRampToValueAtTime(58, now + 0.3);
		bloom.frequency.setValueAtTime(128, now + 0.13);
		bloom.frequency.exponentialRampToValueAtTime(54, now + 0.44);
		bloomFilter.frequency.setValueAtTime(620, now);
		bloomFilter.frequency.exponentialRampToValueAtTime(180, now + 0.3);
		bloomFilter.frequency.setValueAtTime(560, now + 0.13);
		bloomFilter.frequency.exponentialRampToValueAtTime(170, now + 0.44);
		bloomEnvelope.triggerAttackRelease(0.34, now, 0.96);
		bloomEnvelope.triggerAttackRelease(0.26, now + 0.13, 0.68);

		airFilter.frequency.setValueAtTime(860, now);
		airFilter.frequency.exponentialRampToValueAtTime(360, now + 0.18);
		airFilter.frequency.setValueAtTime(800, now + 0.13);
		airFilter.frequency.exponentialRampToValueAtTime(340, now + 0.28);
		airEnvelope.triggerAttackRelease(0.08, now, 0.18);
		airEnvelope.triggerAttackRelease(0.06, now + 0.13, 0.14);
	} else if (variant === 'wobble') {
		const wobble = new Tone.LFO({ ...preset.wobble });
		wobble.connect(bloomFilter.frequency);
		wobble.start(now);

		thump.triggerAttackRelease('A0', 0.18, now, 0.72);
		bloom.frequency.setValueAtTime(134, now);
		bloom.frequency.exponentialRampToValueAtTime(52, now + 0.42);
		bloomEnvelope.triggerAttackRelease(0.44, now, 0.92);
		airFilter.frequency.setValueAtTime(820, now);
		airFilter.frequency.exponentialRampToValueAtTime(320, now + 0.24);
		airEnvelope.triggerAttackRelease(0.1, now, 0.16);

		disposeAfter(preset.disposeAfter, [wobble]);
	} else {
		thump.triggerAttackRelease('B0', 0.16, now, 0.76);
		bloom.frequency.setValueAtTime(138, now);
		bloom.frequency.exponentialRampToValueAtTime(56, now + 0.36);
		bloomFilter.frequency.setValueAtTime(640, now);
		bloomFilter.frequency.exponentialRampToValueAtTime(180, now + 0.36);
		bloomEnvelope.triggerAttackRelease(0.38, now, 1);
		airFilter.frequency.setValueAtTime(840, now);
		airFilter.frequency.exponentialRampToValueAtTime(340, now + 0.2);
		airEnvelope.triggerAttackRelease(0.09, now, 0.18);
	}

	disposeAfter(preset.disposeAfter, [
		thump,
		bloom,
		bloomFilter,
		bloomEnvelope,
		air,
		airFilter,
		airEnvelope,
		output,
		pulseGain,
		chorus
	]);
};

export const triggerCRTPulseSound = (
	variant: CRTPulseVariant,
	profile: CRTSoundProfile = CRT_SOUND_PROFILE_ORDER[0]
) => {
	const now = Tone.now();

	switch (profile) {
		case 'terminal':
			triggerTerminalPulse(variant, now);
			return;

		case 'monitor':
			triggerMonitorPulse(variant, now);
			return;

		default:
			triggerScannerPulse(variant, now);
	}
};
