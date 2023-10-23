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
	let main: HTMLElement;

	const handleGetInTouchButton = () => {
		formRef.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
	};

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	let currentIntersectionRatio = 0;

	const handleIntersections = (entries: IntersectionObserverEntry[]) => {
		currentIntersectionRatio = entries.reduce((maxIntersection, entry) => {
			const elementRect = entry.boundingClientRect;
			const viewportHeight = window.innerHeight;

			let visibleHeight =
				Math.min(elementRect.bottom, viewportHeight) - Math.max(elementRect.top, 0);

			let percentageOccupied = (visibleHeight / viewportHeight) * 100;

			if (maxIntersection > percentageOccupied) return maxIntersection;

			return percentageOccupied;
		}, 0);
	};

	const colorTransitionClamp = (currentValue: number) => {
		return clamp(currentValue, 9, 100);
	};
	const ANIMATION_SMOOTHNESS = 2;
	$: saturationLevelPercent = colorTransitionClamp(
		100 - currentIntersectionRatio * ANIMATION_SMOOTHNESS
	);
	$: invertedSaturationLevelPercent = colorTransitionClamp(
		currentIntersectionRatio * ANIMATION_SMOOTHNESS
	);

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersections, {
			threshold: buildThresholdList()
		});

		observer.observe(main);
	});
</script>

<div
	class="container"
	style:background-color={`hsla(0, 0%, ${invertedSaturationLevelPercent}%, 1)`}
	style:color={`hsla(0, 0%, ${saturationLevelPercent}%, 1)`}
>
	<Header {handleGetInTouchButton} bind:header />
	<Main bind:main />
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
