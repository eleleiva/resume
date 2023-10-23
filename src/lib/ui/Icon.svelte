<script lang="ts">
	import Arrow from '$lib/icons/Arrow.svelte';
	import ArrowUp from '$lib/icons/ArrowUp.svelte';
	import Box from '$lib/icons/Box.svelte';
	import Cat from '$lib/icons/Cat.svelte';
	import CupOfTea from '$lib/icons/CupOfTea.svelte';
	import HappyFace from '$lib/icons/HappyFace.svelte';
	import MapMarker from '$lib/icons/MapMarker.svelte';

	let class_name = '';
	export { class_name as class };
	export let name: keyof typeof Icons;

	const Icons = {
		cat: {
			Icon: Cat,
			name: 'cat'
		},
		cupOfTea: {
			Icon: CupOfTea,
			name: 'cup of tea'
		},
		mapMarker: {
			Icon: MapMarker,
			name: 'map marker'
		},
		happyFace: {
			Icon: HappyFace,
			name: 'happy face'
		},
		arrow: {
			Icon: Arrow,
			name: 'arrow'
		},
		arrowUp: {
			Icon: ArrowUp,
			name: 'arrowUp'
		},
		box: {
			Icon: Box,
			name: 'box'
		}
	};

	const icon = Icons[name];
	const Icon = icon.Icon;
</script>

<i class={class_name}>
	<Icon />
	<span>
		{icon.name}
	</span>
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
