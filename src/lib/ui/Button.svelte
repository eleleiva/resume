<script lang="ts">
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let onClick: () => void = () => {};

	const handleClick = () => {
		onClick();
	};
</script>

<button {type} on:click={handleClick}><slot /></button>

<style>
	button {
		display: flex;
		height: 3rem;
		padding: 1rem 1.5rem;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid #fff;
		color: #fff;
		background: #161616;

		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.08rem;
		font-family: NeueBit, sans-serif;

		text-transform: uppercase;
		cursor: pointer;
		transform: translateY(0);

		transition:
			color 220ms steps(3, end),
			background-color 220ms steps(3, end),
			border-color 220ms steps(3, end),
			transform 150ms steps(2, end),
			box-shadow 220ms steps(3, end);
	}

	button:hover {
		border: 1px solid #68fe65;
		color: #68fe65;
		background: #161616;
		transform: translateY(-2px);
		box-shadow:
			0 0 0 1px rgba(104, 254, 101, 0.16),
			4px 4px 0 rgba(104, 254, 101, 0.12);
	}

	button:active {
		transform: translateY(1px);
		box-shadow:
			0 0 0 1px rgba(104, 254, 101, 0.12),
			2px 2px 0 rgba(104, 254, 101, 0.08);
	}

	button:focus-visible {
		outline: none;
		border-color: #68fe65;
		box-shadow: 0 0 0 3px rgba(104, 254, 101, 0.22);
	}

	@media (prefers-reduced-motion: reduce) {
		button {
			transition:
				color 220ms steps(3, end),
				background-color 220ms steps(3, end),
				border-color 220ms steps(3, end);
		}

		button:hover,
		button:active {
			transform: none;
			box-shadow: none;
		}
	}

	:global(html[data-animations='off']) button {
		transition:
			color 220ms steps(3, end),
			background-color 220ms steps(3, end),
			border-color 220ms steps(3, end);
	}

	:global(html[data-animations='off']) button:hover,
	:global(html[data-animations='off']) button:active {
		transform: none;
		box-shadow: none;
	}
</style>
