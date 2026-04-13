export type CRTPulseVariant = 'single' | 'double' | 'wobble';
export type CRTSoundProfile = 'scanner' | 'terminal' | 'monitor';

export const CRT_SOUND_PROFILE_ORDER: readonly CRTSoundProfile[] = [
	'scanner',
	'terminal',
	'monitor'
];

export const CRT_SOUND_PROFILE_LABELS: Record<CRTSoundProfile, string> = {
	scanner: 'Scanner',
	terminal: 'Terminal',
	monitor: 'Monitor'
};

export const SOUND_PRESETS = {
	scanner: {
		levels: {
			ambient: 30,
			pulse: 0.76
		},
		ambient: {
			masterGain: 0.52,
			phaser: {
				options: {
					frequency: 0.08,
					octaves: 1.8,
					baseFrequency: 240,
					Q: 1.6
				},
				wet: 0.34
			},
			rumble: {
				oscillator: { type: 'sawtooth', frequency: 46 },
				filter: {
					type: 'lowpass',
					frequency: 150,
					rolloff: -24,
					Q: 0.75
				},
				drive: {
					distortion: 0.42,
					wet: 0.8
				},
				gain: 0.016
			},
			grind: {
				noise: { type: 'brown' },
				filter: {
					type: 'bandpass',
					frequency: 720,
					rolloff: -24,
					Q: 1.1
				},
				shaper: {
					order: 21,
					wet: 0.58
				},
				gain: 0.018
			},
			scanline: {
				oscillator: { type: 'square', frequency: 118 },
				filter: {
					type: 'bandpass',
					frequency: 1940,
					rolloff: -24,
					Q: 7.8
				},
				gain: 0.0014
			},
			lfo: {
				grindDrift: { frequency: 0.045, min: 480, max: 980 },
				rumbleWobble: { frequency: 0.065, min: 44, max: 49 },
				artifactFlicker: { frequency: 0.19, min: 0.00045, max: 0.0016 }
			}
		},
		pulse: {
			disposeAfter: 1080,
			outputFilter: {
				type: 'lowpass',
				frequency: 1180,
				rolloff: -24,
				Q: 0.8
			},
			drive: {
				distortion: 0.44,
				wet: 0.62
			},
			phaser: {
				options: {
					frequency: 1.1,
					octaves: 1.6,
					baseFrequency: 180,
					Q: 1.2
				},
				wet: 0.1
			},
			thump: {
				pitchDecay: 0.09,
				octaves: 4,
				oscillator: { type: 'sine' },
				envelope: { attack: 0.001, decay: 0.14, sustain: 0, release: 0.14 },
				volume: -16
			},
			coil: {
				oscillator: { type: 'sawtooth', frequency: 156 },
				filter: {
					type: 'bandpass',
					frequency: 620,
					rolloff: -24,
					Q: 1.15
				},
				envelope: { attack: 0.001, decay: 0.26, sustain: 0, release: 0.22 },
				stopAfter: 0.82
			},
			wash: {
				noise: { type: 'brown' },
				filter: {
					type: 'bandpass',
					frequency: 720,
					rolloff: -24,
					Q: 0.72
				},
				envelope: { attack: 0.001, decay: 0.11, sustain: 0, release: 0.06 },
				stopAfter: 0.34
			},
			wobble: { frequency: 5.4, min: 180, max: 520 }
		}
	},
	terminal: {
		levels: {
			ambient: 10,
			pulse: 1
		},
		ambient: {
			masterGain: 0.56,
			floor: {
				noise: { type: 'brown' },
				filter: {
					type: 'lowpass',
					frequency: 760,
					rolloff: -24,
					Q: 0.4
				},
				gain: 0.025
			},
			hiss: {
				noise: { type: 'white' },
				filter: {
					type: 'highpass',
					frequency: 1280,
					rolloff: -24,
					Q: 0.6
				},
				motion: {
					frequency: 0.075,
					baseFrequency: 980,
					octaves: 2.6,
					depth: 0.8,
					filter: {
						type: 'bandpass',
						rolloff: -24,
						Q: 1.15
					}
				},
				gain: 0.009
			},
			grain: {
				noise: { type: 'pink' },
				filter: {
					type: 'bandpass',
					frequency: 2200,
					rolloff: -24,
					Q: 0.9
				},
				gain: 0.0048
			},
			lfo: {
				pressure: { frequency: 0.034, min: 520, max: 980 },
				turbulence: { frequency: 0.14, min: 1750, max: 4200 },
				hissSurge: { frequency: 0.048, min: 0.0065, max: 0.0115 }
			}
		},
		pulse: {
			disposeAfter: 1040,
			outputFilter: {
				type: 'bandpass',
				frequency: 640,
				rolloff: -24,
				Q: 0.38
			},
			delay: {
				delayTime: 0.06,
				feedback: 0.16,
				wet: 0.06
			},
			weight: {
				noise: { type: 'brown' },
				filter: {
					type: 'lowpass',
					frequency: 340,
					rolloff: -24,
					Q: 0.35
				},
				envelope: { attack: 0.001, decay: 0.17, sustain: 0, release: 0.12 },
				stopAfter: 0.5
			},
			hiss: {
				noise: { type: 'white' },
				filter: {
					type: 'bandpass',
					frequency: 1180,
					rolloff: -24,
					Q: 0.65
				},
				envelope: { attack: 0.001, decay: 0.08, sustain: 0, release: 0.04 },
				stopAfter: 0.26
			},
			coil: {
				oscillator: { type: 'triangle', frequency: 126 },
				filter: {
					type: 'bandpass',
					frequency: 540,
					rolloff: -24,
					Q: 1.2
				},
				envelope: { attack: 0.002, decay: 0.26, sustain: 0, release: 0.2 },
				stopAfter: 0.76
			},
			wobble: { frequency: 5.8, min: 250, max: 780 }
		}
	},
	monitor: {
		levels: {
			ambient: 20,
			pulse: 1
		},
		ambient: {
			masterGain: 0.62,
			chorus: {
				frequency: 0.9,
				delayTime: 2.2,
				depth: 0.28,
				wet: 0.44
			},
			hum: {
				oscillator: { type: 'sine', frequency: 66 },
				filter: {
					type: 'lowpass',
					frequency: 210,
					rolloff: -24,
					Q: 0.3
				},
				gain: 0.0085
			},
			bloom: {
				oscillator: { type: 'triangle', frequency: 132 },
				filter: {
					type: 'lowpass',
					frequency: 920,
					rolloff: -24,
					Q: 0.35
				},
				gain: 0.0038
			},
			air: {
				noise: { type: 'pink' },
				filter: {
					type: 'bandpass',
					frequency: 2850,
					rolloff: -24,
					Q: 0.55
				},
				gain: 0.003
			},
			sparkle: {
				oscillator: { type: 'sine', frequency: 264 },
				filter: {
					type: 'bandpass',
					frequency: 1250,
					rolloff: -24,
					Q: 0.8
				},
				gain: 0.0013
			},
			lfo: {
				bloomDrift: { frequency: 0.05, min: 126, max: 138 },
				warmth: { frequency: 0.032, min: 0.0078, max: 0.0093 },
				airFlutter: { frequency: 0.09, min: 0.0023, max: 0.0036 }
			}
		},
		pulse: {
			disposeAfter: 1180,
			outputFilter: {
				type: 'lowpass',
				frequency: 1180,
				rolloff: -24,
				Q: 0.55
			},
			chorus: {
				frequency: 1.4,
				delayTime: 2.4,
				depth: 0.22,
				wet: 0.08
			},
			thump: {
				pitchDecay: 0.06,
				octaves: 3.6,
				oscillator: { type: 'triangle' },
				envelope: { attack: 0.001, decay: 0.13, sustain: 0, release: 0.15 },
				volume: -20
			},
			bloom: {
				oscillator: { type: 'triangle', frequency: 138 },
				filter: {
					type: 'bandpass',
					frequency: 600,
					rolloff: -24,
					Q: 1.08
				},
				envelope: { attack: 0.002, decay: 0.28, sustain: 0, release: 0.22 },
				stopAfter: 0.88
			},
			air: {
				noise: { type: 'pink' },
				filter: {
					type: 'bandpass',
					frequency: 900,
					rolloff: -24,
					Q: 0.58
				},
				envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.06 },
				stopAfter: 0.32
			},
			wobble: { frequency: 3.4, min: 180, max: 520 }
		}
	}
} as const;
