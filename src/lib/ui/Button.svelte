<script lang="ts">
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let onClick: Function = () => {};

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

		transition:
			color 250ms,
			background-color 250ms,
			border-color 250ms;
	}

	button:hover {
		border: 1px solid #68fe65;
		color: #68fe65;
		background: #161616;
	}
</style>
