<script lang="ts">
	import Arrow from '#lib/icons/Arrow.svelte';
	import ArrowUp from '#lib/icons/ArrowUp.svelte';
	import Box from '#lib/icons/Box.svelte';
	import Cat from '#lib/icons/Cat.svelte';
	import CupOfTea from '#lib/icons/CupOfTea.svelte';
	import HappyFace from '#lib/icons/HappyFace.svelte';
	import MapMarker from '#lib/icons/MapMarker.svelte';

	const ICONS = {
		cat: { Component: Cat, label: 'cat' },
		cupOfTea: { Component: CupOfTea, label: 'cup of tea' },
		mapMarker: { Component: MapMarker, label: 'map marker' },
		happyFace: { Component: HappyFace, label: 'happy face' },
		arrow: { Component: Arrow, label: 'arrow' },
		arrowUp: { Component: ArrowUp, label: 'arrowUp' },
		box: { Component: Box, label: 'box' }
	};

	let { name, class: className = '' }: { name: keyof typeof ICONS; class?: string } = $props();

	const IconComponent = $derived(ICONS[name].Component);
	const label = $derived(ICONS[name].label);
</script>

<i class={className}>
	<IconComponent />
	<span>{label}</span>
</i>

<style>
	span {
		clip: rect(1px, 1px, 1px, 1px);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	i {
		display: flex;
	}
</style>
