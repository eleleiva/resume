<script lang="ts">
	import Icon from './Icon.svelte';

	export let href: string;
</script>

<a {href}>
	<slot />
	<Icon class="icon" name="arrow" />
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: hsla(0, 0%, 9%, 1);
		transition: color 250ms;
	}

	a:hover {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: hsla(240, 100%, 47%, 1);
	}

	a:hover :global(.icon) {
		color: hsla(240, 100%, 47%, 1);
		transform: rotate(-90deg);
	}

	a :global(.icon) {
		transition:
			transform 250ms,
			color 250ms;
	}
</style>
