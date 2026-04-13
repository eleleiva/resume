<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Main from './Main.svelte';
	import type { PageProps } from './$types';
	import * as Tone from 'tone';

	import {
		CRT_SOUND_PROFILE_LABELS,
		CRT_SOUND_PROFILE_ORDER,
		startCRTAmbience,
		stopCRTAmbience,
		triggerCRTPulseSound,
		type CRTPulseVariant,
		type CRTSoundProfile
	} from '$lib/utilities/sound';

	const ANIMATIONS_STORAGE_KEY = 'resume:animations-disabled';

	let crtReady = $state(false);
	let crtPulseActive = $state(false);
	let contentReady = $state(false);
	let animationsDisabled = $state(false);
	let hasMounted = $state(false);
	let crtPulseVariant = $state<CRTPulseVariant>('single');
	let soundEnabled = $state(false);
	let soundProfile = $state<CRTSoundProfile>(CRT_SOUND_PROFILE_ORDER[1]);
	let { form }: PageProps = $props();
	let formRef = $state<HTMLFormElement>();

	const userPrefersReducedMotion = () => {
		if (typeof window === 'undefined') return false;

		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	};

	const shouldReduceMotion = () => animationsDisabled || userPrefersReducedMotion();

	const handleGetInTouchButton = () => {
		formRef?.scrollIntoView?.({
			behavior: shouldReduceMotion() ? 'auto' : 'smooth',
			block: 'center',
			inline: 'start'
		});
	};

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: shouldReduceMotion() ? 'auto' : 'smooth' });
	};

	const applyAnimationPreference = () => {
		if (typeof document === 'undefined') return;

		if (animationsDisabled) {
			document.documentElement.dataset.animations = 'off';
			return;
		}

		delete document.documentElement.dataset.animations;
	};

	const setAnimationsDisabled = (value: boolean, persist = true) => {
		animationsDisabled = value;
		applyAnimationPreference();

		if (!persist || typeof localStorage === 'undefined') return;

		localStorage.setItem(ANIMATIONS_STORAGE_KEY, value ? 'off' : 'on');
	};

	const handleAnimationsToggle = () => {
		setAnimationsDisabled(!animationsDisabled);
	};

	const getNextSoundProfile = (profile: CRTSoundProfile): CRTSoundProfile => {
		const currentIndex = CRT_SOUND_PROFILE_ORDER.indexOf(profile);
		const nextIndex = (currentIndex + 1) % CRT_SOUND_PROFILE_ORDER.length;

		return CRT_SOUND_PROFILE_ORDER[nextIndex];
	};

	let isDoublePulse = $derived(crtPulseVariant === 'double');
	let isWobblePulse = $derived(crtPulseVariant === 'wobble');
	let soundProfileLabel = $derived(CRT_SOUND_PROFILE_LABELS[soundProfile]);

	const getRandomPulseVariant = (): CRTPulseVariant => {
		const randomValue = Math.random();

		if (randomValue < 0.22) return 'wobble';
		if (randomValue < 0.48) return 'double';

		return 'single';
	};

	let nextPulseTimeout = 0;
	let contentReadyTimeout = 0;
	let pulseTimeout = 0;

	const clearPulseTimers = () => {
		window.clearTimeout(nextPulseTimeout);
		window.clearTimeout(pulseTimeout);
	};

	const triggerCRTPulse = () => {
		crtPulseVariant = getRandomPulseVariant();
		crtPulseActive = true;

		if (soundEnabled) {
			triggerCRTPulseSound(crtPulseVariant, soundProfile);
		}

		window.clearTimeout(pulseTimeout);
		pulseTimeout = window.setTimeout(
			() => {
				crtPulseActive = false;
			},
			crtPulseVariant === 'double' ? 340 : 260
		);
	};

	const scheduleNextPulse = () => {
		const nextDelay = 11000 + Math.random() * 11000;

		nextPulseTimeout = window.setTimeout(() => {
			triggerCRTPulse();
			scheduleNextPulse();
		}, nextDelay);
	};

	$effect(() => {
		if (hasMounted) {
			const reduceMotion = animationsDisabled || userPrefersReducedMotion();

			clearPulseTimers();
			crtPulseActive = false;

			if (!reduceMotion) {
				scheduleNextPulse();
			}
		}
	});

	$effect(() => {
		if (!hasMounted || !soundEnabled) {
			stopCRTAmbience();
			return;
		}

		startCRTAmbience(soundProfile);

		return () => {
			stopCRTAmbience();
		};
	});

	const handleSoundToggle = async () => {
		await Tone.start();

		soundEnabled = !soundEnabled;
	};

	const handleSoundProfileToggle = async () => {
		const nextSoundProfile = getNextSoundProfile(soundProfile);

		soundProfile = nextSoundProfile;

		if (!soundEnabled) return;

		await Tone.start();
		triggerCRTPulseSound('single', nextSoundProfile);
	};

	onMount(() => {
		setAnimationsDisabled(localStorage.getItem(ANIMATIONS_STORAGE_KEY) === 'off', false);
		hasMounted = true;

		requestAnimationFrame(() => {
			crtReady = true;
		});

		contentReadyTimeout = window.setTimeout(() => {
			contentReady = true;
		}, 120);

		return () => {
			hasMounted = false;
			delete document.documentElement.dataset.animations;
			window.clearTimeout(contentReadyTimeout);
			clearPulseTimers();
			stopCRTAmbience();
		};
	});
</script>

<svelte:head>
	<script>
		try {
			if (localStorage.getItem('resume:animations-disabled') === 'off') {
				document.documentElement.dataset.animations = 'off';
			}
		} catch {}
	</script>
</svelte:head>

<div class="container">
	<div class="screen-content">
		<Header {handleGetInTouchButton} />
		<Main />
		<Footer bind:formRef {form} {handleBackToTop} />
	</div>

	<div
		class="crt-effects"
		class:crt-ready={crtReady}
		class:crt-pulse-active={crtPulseActive}
		class:crt-pulse-double={isDoublePulse}
		class:crt-pulse-wobble={isWobblePulse}
		aria-hidden="true"
	>
		<div class="crt-sweep"></div>
	</div>

	<div class="crt-bezel" aria-hidden="true"></div>
</div>

<div class="crt-readout" class:content-ready={contentReady}>
	<button
		type="button"
		class="readout-toggle-button"
		class:readout-toggle-enabled={soundEnabled}
		class:readout-toggle-disabled={!soundEnabled}
		aria-pressed={soundEnabled}
		onclick={handleSoundToggle}
	>
		<span class="readout-led"></span>
		Audio
	</button>
	<button
		type="button"
		class="readout-toggle-button"
		class:readout-toggle-enabled={soundEnabled}
		class:readout-toggle-disabled={!soundEnabled}
		onclick={handleSoundProfileToggle}
	>
		<span class="readout-led"></span>
		Tone: {soundProfileLabel}
	</button>
	<button
		type="button"
		class="readout-toggle-button"
		class:readout-toggle-enabled={!animationsDisabled}
		class:readout-toggle-disabled={animationsDisabled}
		aria-pressed={!animationsDisabled}
		onclick={handleAnimationsToggle}
	>
		<span class="readout-led"></span>
		{animationsDisabled ? 'Enable animations' : 'Disable animations'}
	</button>
	<span class="readout-pill" aria-hidden="true">Input: web</span>
	<span class="readout-pill" aria-hidden="true">Montevideo UTC-3</span>
</div>

<style>
	.container {
		transition:
			background-color 500ms ease,
			color 500ms ease;
		background-color: hsl(0, 0%, 9%);
		color: #fff;
		min-height: 100vh;
		position: relative;
		padding: 2rem 5rem;
	}

	.screen-content {
		position: relative;
		z-index: 1;
		padding: 0 1rem 0 1rem;
	}

	.crt-readout {
		position: fixed;
		left: 3.25rem;
		bottom: 3.25rem;
		z-index: 3;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		max-width: calc(100vw - 6.5rem);
		pointer-events: none;
		opacity: 0;
		transform: translateY(4px);
		transition:
			opacity 180ms steps(3, end),
			transform 180ms steps(3, end);
	}

	.crt-readout.content-ready {
		opacity: 1;
		transform: translateY(0);
	}

	.readout-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.25rem 0.5rem;
		border: 1px solid rgba(255, 255, 255, 0.22);
		background: rgba(10, 10, 10, 0.55);
		color: rgba(255, 255, 255, 0.86);
		font-family: NeueBit, sans-serif;
		font-size: 1rem;
		letter-spacing: 0.08rem;
		text-transform: uppercase;
		text-shadow: 0 0 6px rgba(255, 255, 255, 0.14);
		backdrop-filter: blur(2px);
	}

	.readout-toggle-button {
		pointer-events: auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		padding: 0.25rem 0.5rem;
		border: 1px solid rgba(255, 255, 255, 0.22);
		background: rgba(10, 10, 10, 0.55);
		color: rgba(255, 255, 255, 0.86);
		font-family: NeueBit, sans-serif;
		font-size: 1rem;
		letter-spacing: 0.08rem;
		text-transform: uppercase;
		text-shadow: 0 0 6px rgba(255, 255, 255, 0.14);
		backdrop-filter: blur(2px);
		cursor: pointer;
		transition:
			border-color 180ms steps(3, end),
			color 180ms steps(3, end),
			background-color 180ms steps(3, end),
			box-shadow 180ms steps(3, end);
	}

	.readout-toggle-enabled {
		color: #aaff9b;
		border-color: rgba(104, 254, 101, 0.34);
	}

	.readout-toggle-disabled {
		color: #ff8b87;
		border-color: rgba(254, 104, 101, 0.34);
	}

	.readout-toggle-button:hover,
	.readout-toggle-button:focus-visible {
		background: rgba(20, 20, 20, 0.68);
	}

	.readout-toggle-enabled:hover,
	.readout-toggle-enabled:focus-visible {
		box-shadow: 0 0 0 1px rgba(104, 254, 101, 0.14);
	}

	.readout-toggle-disabled:hover,
	.readout-toggle-disabled:focus-visible {
		box-shadow: 0 0 0 1px rgba(254, 104, 101, 0.14);
	}

	.readout-toggle-button:focus-visible {
		outline: none;
	}

	.readout-led {
		width: 0.45rem;
		height: 0.45rem;
		flex-shrink: 0;
		background: currentColor;
		animation: readout-led-blink 3.4s steps(2, end) infinite;
	}

	.readout-toggle-enabled .readout-led {
		box-shadow: 0 0 6px rgba(104, 254, 101, 0.55);
	}

	.readout-toggle-disabled .readout-led {
		box-shadow: 0 0 6px rgba(254, 104, 101, 0.55);
	}

	@keyframes readout-led-blink {
		0%,
		88%,
		100% {
			opacity: 1;
		}

		89%,
		94% {
			opacity: 0.45;
		}
	}

	@media (max-width: 780px) {
		.container {
			padding: 2rem 1rem;
		}

		.crt-readout {
			left: 1.75rem;
			right: 1.75rem;
			bottom: 1.75rem;
			max-width: none;
		}

		.readout-pill {
			font-size: 0.875rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.crt-readout,
		.readout-toggle-button,
		.readout-led {
			animation: none;
			transition: none;
		}

		.crt-readout {
			opacity: 1;
			transform: none;
		}
	}

	:global(html[data-animations='off']) .crt-readout,
	:global(html[data-animations='off']) .readout-toggle-button,
	:global(html[data-animations='off']) .readout-led {
		animation: none;
		transition: none;
	}

	:global(html[data-animations='off']) .crt-readout {
		opacity: 1;
		transform: none;
	}
</style>
