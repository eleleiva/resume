<script lang="ts">
	import Label from './Label.svelte';

	export let name: string;
	export let placeholder: string;
	export let type: 'email' | 'text' = 'text';
	export let label: string;
	export let required: boolean = false;
	export let error: boolean = false;
</script>

<Label {label} {required} {name}>
	<input class:error {name} {type} {placeholder} />
</Label>

<style>
	input {
		background-color: transparent;
		display: flex;
		padding: 1rem 0.75rem;
		align-items: center;
		gap: 0.625rem;
		align-self: stretch;
		border: 1px solid currentColor;

		color: currentColor;

		font-family: NeueBit;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.08rem;
	}

	input::placeholder {
		color: #b0b0b0;
		font-family: NeueBit;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.08rem;
	}

	input:focus-visible {
		outline: 1px solid hsla(110, 92%, 56%, 1);
		border-color: hsla(110, 92%, 56%, 1);
	}

	.error {
		border-color: hsla(0, 100%, 50%, 1);
	}
</style>
