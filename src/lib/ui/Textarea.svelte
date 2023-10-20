<script lang="ts">
	import Label from './Label.svelte';

	export let name: string;
	export let label: string;
	export let placeholder: string;
	export let value: string = '';
	export let required: boolean = false;
	export let error: boolean = false;
</script>

<Label {label} {required} {name}>
	<textarea class:error {name} {placeholder} {required}>{value}</textarea>
</Label>

<style>
	textarea {
		color: currentColor;
		background-color: transparent;
		display: flex;
		padding: 1rem 0.75rem;
		align-items: center;
		font-size: 1rem;
		letter-spacing: 0.08rem;
		font-weight: 700;
		line-height: normal;
		gap: 0.625rem;
		align-self: stretch;
		border: 1px solid currentColor;
	}

	textarea:focus-visible {
		outline: 1px solid hsla(110, 92%, 56%, 1);
		border-color: hsla(110, 92%, 56%, 1);
	}

	textarea::placeholder {
		color: #b0b0b0;
		font-family: NeueBit, sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.08rem;
	}

	.error {
		border-color: hsla(0, 100%, 50%, 1);
	}
</style>
