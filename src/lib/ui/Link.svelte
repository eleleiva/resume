<script lang="ts">
	import Icon from './Icon.svelte';

	export let href: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<slot />
	<Icon class="icon" name="arrow" />
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: currentColor;
		transition: color 220ms steps(3, end);
		text-decoration: none;

		font-family:
			'Inter',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	a :global(.icon) {
		transition:
			transform 220ms steps(3, end),
			color 220ms steps(3, end);
	}

	a:hover,
	a:focus-visible {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: hsla(240, 100%, 47%, 1);
		outline: none;
	}

	a:hover :global(.icon),
	a:focus-visible :global(.icon) {
		color: hsla(240, 100%, 47%, 1);
		transform: translateX(4px) rotate(-90deg);
	}

	@media (prefers-reduced-motion: reduce) {
		a :global(.icon) {
			transition: color 220ms steps(3, end);
		}

		a:hover :global(.icon),
		a:focus-visible :global(.icon) {
			transform: none;
		}
	}

	:global(html[data-animations='off']) a :global(.icon) {
		transition: color 220ms steps(3, end);
	}

	:global(html[data-animations='off']) a:hover :global(.icon),
	:global(html[data-animations='off']) a:focus-visible :global(.icon) {
		transform: none;
	}
</style>
