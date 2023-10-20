<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Main from './Main.svelte';
	import { buildThresholdList } from '$lib/utilities/animation';
	import { clamp } from '$lib/utilities/math';
	import { onMount } from 'svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let formRef: HTMLFormElement;
	let header: HTMLElement;
	let footer: HTMLElement;

	const handleGetInTouchButton = () => {
		formRef.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
	};

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	let currentIntersectionRatio = 1;

	const handleIntersections = (entries: IntersectionObserverEntry[]) => {
		currentIntersectionRatio = entries.reduce((maxIntersection, entry) => {
			if (maxIntersection > entry.intersectionRatio) return maxIntersection;

			return entry.intersectionRatio;
		}, 0);
	};

	const colorTransitionClamp = (currentValue: number) => {
		return clamp(currentValue, 9, 100);
	};
	const ANIMATION_SMOOTHNESS = 2;
	$: saturationLevelPercent = colorTransitionClamp(
		currentIntersectionRatio * ANIMATION_SMOOTHNESS * 100
	);
	$: invertedSaturationLevelPercent = colorTransitionClamp(
		100 - currentIntersectionRatio * ANIMATION_SMOOTHNESS * 100
	);

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersections, {
			threshold: buildThresholdList()
		});

		observer.observe(header);
		observer.observe(footer);
	});
</script>

<div
	class="container"
	style:background-color={`hsla(0, 0%, ${invertedSaturationLevelPercent}%, 1)`}
	style:color={`hsla(0, 0%, ${saturationLevelPercent}%, 1)`}
>
	<Header {handleGetInTouchButton} bind:header />
	<Main />
	<Footer bind:footer bind:form bind:formRef {handleBackToTop} />
</div>

<style>
	.container {
		transition:
			background-color 500ms ease,
			color 500ms ease;
		background-color: hsl(0, 0%, 9%);
		color: #fff;

		padding: 2rem 5rem;
	}

	@media (max-width: 780px) {
		.container {
			padding: 2rem 1rem;
		}
	}
</style>
